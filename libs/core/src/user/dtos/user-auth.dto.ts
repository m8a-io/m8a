import { UserAuthEntity } from '../entities/user-auth.entity'

export class UserAuthDTO {
  public _id!: string

  public id!: string

  public firstName!: string

  public lastName!: string

  public username!: string

  public passwordHash!: string

  public email!: string

  public status!: string

  public salt!: string

  public m8aAuthId!: string

  public userAuthData!: UserAuthEntity
}
