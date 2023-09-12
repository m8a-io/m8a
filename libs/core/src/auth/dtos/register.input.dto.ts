import { InputType, Field } from '@nestjs/graphql'
import { FilterableField } from '@ptc-org/nestjs-query-graphql'

@InputType()
export class RegisterInputDTO {
  @FilterableField()
  public firstName!: string

  @FilterableField()
  public lastName!: string

  @FilterableField()
  public email!: string

  @Field()
  public password!: string

  @Field({ nullable: true })
  public temp?: string
}
