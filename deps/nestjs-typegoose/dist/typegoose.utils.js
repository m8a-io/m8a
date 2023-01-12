"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectionToken = exports.getModelToken = void 0;
const typegoose_constants_1 = require("./typegoose.constants");
function getModelToken(model) {
    return `${model}Model`;
}
exports.getModelToken = getModelToken;
function getConnectionToken(name) {
    if (typeof name === 'string' && name !== typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME) {
        return `${name}Connection`;
    }
    return typegoose_constants_1.DEFAULT_DB_CONNECTION_NAME;
}
exports.getConnectionToken = getConnectionToken;
