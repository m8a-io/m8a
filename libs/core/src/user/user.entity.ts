import { Prop, Index, ModelOptions } from '@typegoose/typegoose'
import { BaseEntity } from '../base/entities/base.entity'

@Index({ username: 1 }, { unique: true })
@Index({ email: 1 }, { unique: true })
@ModelOptions({ schemaOptions: { collection: 'users' } })
export class UserEntity extends BaseEntity {
  @Prop({ required: true })
  public firstName!: string

  @Prop({ required: true })
  public lastName!: string

  @Prop()
  public username!: string

  @Prop({ required: true })
  public email!: string

  @Prop()
  public passwordHash!: string

  @Prop({ required: true })
  public status!: string

  @Prop()
  public salt!: string
}
