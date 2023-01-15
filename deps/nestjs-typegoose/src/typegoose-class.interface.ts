import { SchemaOptions } from 'mongoose'

export interface TypegooseClass {
  new (...args: unknown[]);
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
