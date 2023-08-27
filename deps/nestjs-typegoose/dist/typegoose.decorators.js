"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectConnection = exports.InjectModel = void 0;
const common_1 = require("@nestjs/common");
const typegoose_utils_1 = require("./typegoose.utils");
const InjectModel = (model) => (0, common_1.Inject)((0, typegoose_utils_1.getModelToken)(model.name));
exports.InjectModel = InjectModel;
const InjectConnection = (name) => (0, common_1.Inject)((0, typegoose_utils_1.getConnectionToken)(name));
exports.InjectConnection = InjectConnection;
