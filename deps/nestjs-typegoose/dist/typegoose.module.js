"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TypegooseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypegooseModule = void 0;
const common_1 = require("@nestjs/common");
const typegoose_core_module_1 = require("./typegoose-core.module");
const typegoose_providers_1 = require("./typegoose.providers");
let TypegooseModule = TypegooseModule_1 = class TypegooseModule {
    static forRoot(uri, options = {}) {
        return {
            module: TypegooseModule_1,
            imports: [typegoose_core_module_1.TypegooseCoreModule.forRoot(uri, options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: TypegooseModule_1,
            imports: [typegoose_core_module_1.TypegooseCoreModule.forRootAsync(options)],
        };
    }
    static forFeature(models, connectionName) {
        const convertedModels = models.map((model) => (0, typegoose_providers_1.convertToTypegooseClassWithOptions)(model));
        const providers = (0, typegoose_providers_1.createTypegooseProviders)(connectionName, convertedModels);
        return {
            module: TypegooseModule_1,
            providers,
            exports: providers,
        };
    }
};
TypegooseModule = TypegooseModule_1 = __decorate([
    (0, common_1.Module)({})
], TypegooseModule);
exports.TypegooseModule = TypegooseModule;
