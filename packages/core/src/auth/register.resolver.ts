import { Args, Resolver, Mutation } from '@nestjs/graphql'
import { RegisterInputDTO } from './dtos/register.input.dto'
import { UserService } from '../user/user.service'
import { UserDTO } from '../user/dtos/user.dto'
import { UserEntity } from '../user/user.entity'

@Resolver(() => UserDTO)
export class RegisterResolver {
  constructor(private readonly userService: UserService) { }

  /**
   * 
   * @param registerInput 
   * @returns UserDTO
   */
  @Mutation(() => UserDTO, { description: 'This is the mutation for registering a new user.' })
  async register (@Args('data') registerInput: RegisterInputDTO): Promise<UserEntity> {
    return await this.userService.register(registerInput)
  }
}
