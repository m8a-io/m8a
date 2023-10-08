import { Injectable } from '@nestjs/common'
import { UserAuthEntity } from './entities/user-auth.entity'
import { UserEntity } from './entities/user.entity'
import { UserAuthDTO } from './dtos/user-auth.dto'
import {
  Assembler,
  AssemblerQueryService,
  ClassTransformerAssembler,
  InjectQueryService,
  QueryService
} from '@ptc-org/nestjs-query-core'

@Assembler(UserAuthDTO, UserEntity)
export class UserAuthAssembler extends ClassTransformerAssembler<UserAuthDTO, UserEntity> {}

@Injectable()
@QueryService(UserAuthDTO)
export class UserAuthService extends AssemblerQueryService<UserAuthDTO, UserEntity> {
  constructor (
    readonly assembler: UserAuthAssembler,
    @InjectQueryService(UserEntity)
    private readonly userService: QueryService<UserEntity>
  ) {
    super(assembler, userService)
  }

  public async setUserAuth (userId: string, userAuth: UserAuthEntity): Promise<UserEntity> {
    const user = await this.userService.getById(userId)
    if (!user) {
      throw new Error('User not found')
    }
    user.userAuthData = userAuth
    await this.userService.updateOne(user.id, user)
    return user
  }
}
