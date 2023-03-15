import { Field, ID, ObjectType } from "@nestjs/graphql";
import { FilterableField } from "@ptc-org/nestjs-query-graphql";
import { UserDTO } from "../../user/dtos/user.dto";

@ObjectType()
// @Relation('createdBy', () => UserDTO, {
//   disableRemove: true,
//   pagingStrategy: PagingStrategies.OFFSET,
//   enableTotalCount: true
// })
// @Relation('modifiedBy', () => UserDTO, {
//   disableRemove: true,
//   pagingStrategy: PagingStrategies.OFFSET,
//   enableTotalCount: true
// })
export class BaseDTO {
  // _id: Types.ObjectId

  @FilterableField(() => ID)
  id!: string;

  @Field(() => UserDTO)
  public createdBy!: UserDTO | string;

  @Field(() => UserDTO)
  public modifiedBy!: UserDTO | string;

  @FilterableField({
    description:
      "A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was modified.",
  })
  public modifiedAt?: Date;

  @FilterableField({
    description:
      "A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was created.",
  })
  public createdAt?: Date;
}
