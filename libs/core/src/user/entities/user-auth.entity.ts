import { Prop } from '@typegoose/typegoose'

export class UserAuthEntity {
  @Prop({ required: true })
  public accessToken!: string

  @Prop({ required: true })
  public expiresIn!: number

  @Prop({ required: true })
  public refreshExpiresIn!: number

  @Prop({ required: true })
  public refreshToken!: string

  @Prop({ required: true })
  public tokenType!: string

  @Prop({ required: true })
  public idToken!: string
}
