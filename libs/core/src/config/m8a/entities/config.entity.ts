import { ObjectType, Field } from '@nestjs/graphql'
import { Prop, ModelOptions } from '@typegoose/typegoose'
import { Allow, IsString } from 'class-validator'

@ObjectType()
@ModelOptions({ schemaOptions: { collection: 'config' } })
export class DbConfigEntity {
  @Allow()
  @IsString()
  @Field()
  @Prop({ required: true })
  public foo!: string
}
