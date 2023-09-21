import { BaseDTO } from '../../base/dtos/base.dto'
import { UserAuthEntity } from '../entities/user-auth.entity'

export class UserAuthDTO extends BaseDTO {
  public firstName!: string

  public lastName!: string

  public username!: string

  public passwordHash!: string

  public email!: string

  public status!: string

  public salt!: string

  public userAuthData: UserAuthEntity
}
