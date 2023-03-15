import { SchemaOptions } from "mongoose";
export interface TypegooseClass {
    new (...args: unknown[]): any;
}
export interface TypegooseClassWrapper {
    typegooseClass: TypegooseClass;
}
export interface TypegooseDiscriminator extends TypegooseClassWrapper {
    discriminatorId?: string;
}
export interface TypegooseClassWithOptions extends TypegooseClassWrapper {
    schemaOptions?: SchemaOptions;
    discriminators?: (TypegooseClass | TypegooseDiscriminator)[];
}
