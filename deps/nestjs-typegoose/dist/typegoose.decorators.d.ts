import { TypegooseClass } from "./typegoose-class.interface";
export declare const InjectModel: (model: TypegooseClass) => PropertyDecorator & ParameterDecorator;
export declare const InjectConnection: (name?: string) => PropertyDecorator & ParameterDecorator;
