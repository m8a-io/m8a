import { SchemaOptions } from 'mongoose'
import type { types } from '@typegoose/typegoose'

export type TypegooseClass = types.AnyParamConstructor<unknown>

export interface TypegooseClassWrapper {
  typegooseClass: TypegooseClass
}

export interface TypegooseDiscriminator extends TypegooseClassWrapper {
  discriminatorId?: string
}
export interface TypegooseClassWithOptions extends TypegooseClassWrapper {
  schemaOptions?: SchemaOptions
  discriminators?: (TypegooseClass | TypegooseDiscriminator)[]
}
