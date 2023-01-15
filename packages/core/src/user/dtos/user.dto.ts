import { ObjectType } from '@nestjs/graphql'
import { FilterableField, QueryOptions } from '@ptc-org/nestjs-query-graphql'
import { BaseDTO } from '../../base/dtos/base.dto'

@ObjectType('User')
@QueryOptions({ enableTotalCount: true })
export class UserDTO extends BaseDTO {
  @FilterableField({ description: "The user's first name" })
  public firstName!: string

  @FilterableField({ description: "The user's last name" })
  public lastName!: string

  @FilterableField({
    description: "The user's username. In the form of an email address. Can be the user's email address of a version thereof."
  })
  public username!: string

  public password!: string

  @FilterableField({ description: "The user's email address" })
  public email!: string

  @FilterableField()
  public status!: string

  public salt!: string
}
