import { TypegooseClass } from './typegoose-class.interface';
export declare const InjectModel: (model: TypegooseClass) => (target: object, key: string | symbol, index?: number) => void;
