import { Field, ObjectType } from '@nestjs/graphql'
import { UserDTO } from '../../user/dtos/user.dto'

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
// })c
export class BaseInputDTO {
  @Field(() => UserDTO)
  public createdBy!: UserDTO

  @Field(() => UserDTO)
  public modifiedBy!: UserDTO
}
