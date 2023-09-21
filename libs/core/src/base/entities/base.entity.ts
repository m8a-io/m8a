import { Types } from 'mongoose'
import { Prop, Ref, ModelOptions, plugin as Plugin } from '@typegoose/typegoose'
import * as autopopulate from 'mongoose-autopopulate'
import { UserEntity } from '../../user/entities/user.entity'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'

@ModelOptions({
  schemaOptions: {
    timestamps: { updatedAt: 'modifiedAt' },
    toObject: { virtuals: true }
  }
})
// workaround for type issue in mongoose-autopopulate
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  @Prop({ index: true })
  public m8aAuthId?: string
}
