"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToTypegooseClassWithOptions = exports.createTypegooseProviders = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const is_class_1 = require("is-class");
const typegoose_utils_1 = require("./typegoose.utils");
function createTypegooseProviders(connectionName, models = []) {
    const connectionToken = (0, typegoose_utils_1.getConnectionToken)(connectionName);
    const buildProvider = ({ name }, modelFactory) => ({
        provide: (0, typegoose_utils_1.getModelToken)(name),
        useFactory: modelFactory,
        inject: [connectionToken]
    });
    const createDiscriminatorFactoryFrom = (parentFactory) => (discriminatorDefinition) => {
        if (isTypegooseClass(discriminatorDefinition)) {
            return buildProvider(discriminatorDefinition, (connection) => (0, typegoose_1.getDiscriminatorModelForClass)(parentFactory(connection), discriminatorDefinition));
        }
        const { typegooseClass, discriminatorId } = discriminatorDefinition;
        return buildProvider(typegooseClass, (connection) => (0, typegoose_1.getDiscriminatorModelForClass)(parentFactory(connection), typegooseClass, discriminatorId));
    };
    return models.reduce((providers, { typegooseClass, schemaOptions = {}, discriminators = [] }) => {
        const modelFactory = (connection) => (0, typegoose_1.getModelForClass)(typegooseClass, { existingConnection: connection, schemaOptions });
        const modelProvider = buildProvider(typegooseClass, modelFactory);
        const discriminatorProviders = discriminators.map(createDiscriminatorFactoryFrom(modelFactory));
        return [...providers, modelProvider, ...discriminatorProviders];
    }, []);
}
exports.createTypegooseProviders = createTypegooseProviders;
function convertToTypegooseClassWithOptions(item) {
    const tcwo = convertToOptions(item);
    if (tcwo) {
        if (tcwo.discriminators) {
            tcwo.discriminators = tcwo.discriminators.map(d => convertToOptions(d) || invalidObject('discriminator'));
        }
        return tcwo;
    }
    return invalidObject('model');
}
exports.convertToTypegooseClassWithOptions = convertToTypegooseClassWithOptions;
const isTypegooseClass = (item) => (0, is_class_1.isClass)(item);
const isTypegooseClassWithOptions = (item) => isTypegooseClass(item.typegooseClass);
function convertToOptions(item) {
    if (isTypegooseClass(item)) {
        return { typegooseClass: item };
    }
    else if (isTypegooseClassWithOptions(item)) {
        return item;
    }
}
function invalidObject(type) {
    throw new Error(`Invalid ${type} object`);
}
