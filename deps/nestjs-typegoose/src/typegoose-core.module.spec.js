"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_core_module_1 = require("./typegoose-core.module");
const mongoose_1 = __importDefault(require("mongoose"));
const typegoose_constants_1 = require("./typegoose.constants");
describe('TypegooseCoreModule', () => {
    describe('forRoot', () => {
        it('should return module that provides a mongoose connection', () => {
            const connection = 'i am a connection';
            jest.spyOn(mongoose_1.default, 'createConnection').mockReturnValue(connection);
            const module = typegoose_core_module_1.TypegooseCoreModule.forRoot('mongouri', { authdb: 'mongo connection' });
            const connectionNameProvider = {
                provide: typegoose_constants_1.TYPEGOOSE_CONNECTION_NAME,
                useValue: typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME
            };
            const connectionProvider = {
                provide: typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME,
                useFactory: expect.any(Function)
            };
            expect(module).toEqual({
                module: typegoose_core_module_1.TypegooseCoreModule,
                providers: [connectionProvider, connectionNameProvider],
                exports: [connectionProvider]
            });
            const dbProvider = module.exports[0];
            expect(dbProvider.useFactory()).toBe(connection);
        });
        it('should create connection with no mongoose config', () => {
            const connection = 'i am a connection';
            jest.spyOn(mongoose_1.default, 'createConnection').mockReturnValue(connection);
            const module = typegoose_core_module_1.TypegooseCoreModule.forRoot('mongouri');
            module.exports[0].useFactory();
            expect(mongoose_1.default.createConnection).toHaveBeenCalledWith('mongouri', {});
        });
    });
    describe('forAsyncRoot', () => {
        let connection, mockOptionFactory, wantedDependencies, module;
        beforeEach(() => {
            connection = 'i am a connection';
            jest.spyOn(mongoose_1.default, 'createConnection').mockReturnValue(connection);
            mockOptionFactory = jest.fn();
            wantedDependencies = ['CONFIG_SERVICE'];
        });
        describe('Connection Name', () => {
            let DbConnectionToken;
            beforeEach(() => {
                module = typegoose_core_module_1.TypegooseCoreModule.forRootAsync({
                    useFactory: () => 'testing'
                });
                DbConnectionToken = module.exports[0];
            });
            it('is the only export of the returned module', () => {
                expect(module.exports.length).toBe(1);
                expect(module.exports[0]).toMatchObject({
                    provide: typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME
                });
            });
            it('injects the TYPEGOOSE_MODULE_OPTIONS config', () => {
                expect(DbConnectionToken.inject).toEqual([typegoose_constants_1.TYPEGOOSE_MODULE_OPTIONS]);
            });
            it('creates the mongoose connection', () => {
                const optionsFromOptionFactory = {
                    uri: 'uriForMongoose',
                    other: 'options',
                    can: 'work'
                };
                expect(DbConnectionToken.useFactory(optionsFromOptionFactory)).toBe(connection);
                expect(mongoose_1.default.createConnection).toHaveBeenCalledWith(optionsFromOptionFactory.uri, {
                    other: 'options',
                    can: 'work'
                });
            });
        });
        describe('different types', () => {
            describe('useFactory', () => {
                beforeEach(() => {
                    module = typegoose_core_module_1.TypegooseCoreModule.forRootAsync({
                        useFactory: mockOptionFactory,
                        inject: wantedDependencies
                    });
                });
                it('injects the factory\'s async options into DEFAULT_DB_CONNECTION_NAME', () => {
                    expect(module.providers).toMatchSnapshot();
                    expect(module.exports).toMatchSnapshot();
                    const typegooseModuleOptionsFactoryProvider = module.providers.find(provider => provider.provide === typegoose_constants_1.TYPEGOOSE_MODULE_OPTIONS);
                    expect(typegooseModuleOptionsFactoryProvider.inject).toBe(wantedDependencies);
                    expect(typegooseModuleOptionsFactoryProvider.useFactory).toBe(mockOptionFactory);
                });
            });
            describe('useClass', () => {
                let mockConfigClass;
                beforeEach(() => {
                    mockConfigClass = {
                        createTypegooseOptions: jest.fn()
                    };
                    module = typegoose_core_module_1.TypegooseCoreModule.forRootAsync({
                        useClass: mockConfigClass
                    });
                });
                it('provides the TypegooseConfigService class for TYPEGOOSE_MODULE_OPTIONS', () => {
                    const classProvider = module.providers.find(provider => provider.provide === mockConfigClass);
                    expect(classProvider.provide).toBe(mockConfigClass);
                    expect(classProvider.useClass).toBe(mockConfigClass);
                });
                it('creates a factory called TYPEGOOSE_MODULE_OPTIONS that calls TypegooseConfigService\'s createMongooseOptions', async () => {
                    const typegooseModuleOptionsFactoryProvider = module.providers.find(provider => provider.provide === typegoose_constants_1.TYPEGOOSE_MODULE_OPTIONS);
                    expect(typegooseModuleOptionsFactoryProvider.inject).toEqual([mockConfigClass]);
                    await typegooseModuleOptionsFactoryProvider.useFactory(mockConfigClass);
                    expect(mockConfigClass.createTypegooseOptions).toHaveBeenCalled();
                });
            });
            describe('useExisting', () => {
                let mockUseExistingClass;
                beforeEach(() => {
                    mockUseExistingClass = jest.fn();
                    module = typegoose_core_module_1.TypegooseCoreModule.forRootAsync({
                        useExisting: mockUseExistingClass
                    });
                });
                it('injects the useExisting class into the TYPEGOOSE_MODULE_OPTIONS factory', () => {
                    const typegooseModuleOptionsFactoryProvider = module.providers.find(provider => provider.provide === typegoose_constants_1.TYPEGOOSE_MODULE_OPTIONS);
                    expect(typegooseModuleOptionsFactoryProvider.inject).toEqual([mockUseExistingClass]);
                });
            });
        });
    });
    describe('Disconnect in onModuleDestroy', () => {
        it('should close connection while destroying module', async () => {
            const closeMock = jest.fn(() => Promise.resolve());
            const moduleRefGet = jest.fn(() => ({ close: closeMock }));
            const coreModule = new typegoose_core_module_1.TypegooseCoreModule(typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME, { get: moduleRefGet });
            await coreModule.onApplicationShutdown();
            expect(moduleRefGet).toHaveBeenCalledWith(typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME, {strict: false});
            expect(closeMock).toHaveBeenCalledTimes(1);
        });
    });
    it('shouldn\'t throw error on destroy when the mongoose connection is not found in ref', async () => {
        const closeMock = jest.fn(() => Promise.resolve());
        const moduleRefGet = jest.fn(() => ({ close: closeMock }));
        const coreModule = new typegoose_core_module_1.TypegooseCoreModule(typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME, { get: moduleRefGet });
        expect(() => coreModule.onApplicationShutdown()).not.toThrow();
    });
});
