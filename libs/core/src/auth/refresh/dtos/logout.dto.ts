import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class LogoutDTO {
  @Field({ nullable: true })
  idToken!: string
}
