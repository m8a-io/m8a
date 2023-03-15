import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AccessTokenDTO {
  @Field({ nullable: true })
  accessToken!: string;

  @Field({ nullable: true })
  userId!: string;
}
