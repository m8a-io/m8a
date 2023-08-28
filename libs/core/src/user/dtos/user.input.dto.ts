import { FilterableField } from '@ptc-org/nestjs-query-graphql'
import { Field, InputType } from '@nestjs/graphql'
import { Length } from 'class-validator'

@InputType('UserInput')
export class UserInputDTO {
  @Field({ description: "The user's first name" })
  @Length(2, 20, { message: 'This is the new message!' })
  public firstName!: string

  @Field({ description: "The user's last name" })
  public lastName!: string

  @FilterableField({
    description:
      "The user's username. In the form of an email address. Can be the user's email address or a version thereof."
  })
  public username!: string

  @Field({ description: "The user's email address" })
  public email!: string

  @Field()
  public status!: string
}
