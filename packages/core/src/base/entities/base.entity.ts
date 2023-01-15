import { Types } from 'mongoose'
import { Prop, Ref, ModelOptions, plugin as Plugin } from '@typegoose/typegoose'
import * as autopopulate from 'mongoose-autopopulate'
import { UserEntity } from '../../user/user.entity'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'

@ModelOptions({
  schemaOptions: {
    timestamps: { updatedAt: 'modifiedAt' },
    toObject: { virtuals: true }
  }
})
@Plugin(autopopulate as any)
export class BaseEntity implements Base {
  _id!: Types.ObjectId

  id!: string

  @Prop({ ref: () => UserEntity, autopopulate: { maxDepth: 1 } })
  public createdBy?: Ref<UserEntity>

  @Prop({ ref: () => UserEntity, autopopulate: { maxDepth: 1 } })
  public modifiedBy?: Ref<UserEntity>

  @Prop()
  public modifiedAt!: Date

  @Prop()
  public createdAt!: Date
}
