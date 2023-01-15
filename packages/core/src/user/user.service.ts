import {
  Assembler,
  AssemblerQueryService,
  ClassTransformerAssembler,
  QueryService,
  InjectQueryService
} from '@ptc-org/nestjs-query-core'
import { RegisterInputDTO } from '../auth/dtos/register.input.dto'
import { UserEntity } from './user.entity'
import { UserInputError, ApolloError } from 'apollo-server-errors'
import { Injectable } from '@nestjs/common'
import { UserDTO } from './dtos/user.dto'
import { HashService } from './hash.service'

@Assembler(UserDTO, UserEntity)
export class UserAssembler extends ClassTransformerAssembler<UserDTO, UserEntity> { }

@Injectable()
@QueryService(UserDTO)
export class UserService extends AssemblerQueryService<UserDTO, UserEntity> {
  constructor(
    readonly assembler: UserAssembler,
    @InjectQueryService(UserEntity) private readonly userService: QueryService<UserEntity>,
    private readonly hashService: HashService
  ) {
    super(assembler, userService)
  }
  /**
   * Process to register the new user
   * @param registerInput 
   * @returns 
   */
  public async register (registerInput: RegisterInputDTO): Promise<UserEntity> {
    const passWithSalt = await this.hashService.getPasswordWithSalt(registerInput.password)
    const salt = await this.hashService.getSalt(passWithSalt)
    const hashedPassword = await this.hashService.hashPassword(passWithSalt)

    const result = await this.userService.query({
      filter: {
        username: { eq: 'admin@m8a.io.admin' }
      }
    })

    if (result.length === 0) {
      throw new ApolloError(
        'There was a problem with locating the system user for the registration process. Please see your admin for help.',
        '1001'
      )
    }

    const sysUser = result[0]

    const locatedUser = await this.userService.query({
      filter: {
        username: { eq: registerInput.email }
      }
    })

    if (locatedUser && locatedUser.length === 1) {
      throw new UserInputError('This user already exists.')
    }

    const user = await this.userService.createOne({
      firstName: registerInput.firstName,
      lastName: registerInput.lastName,
      email: registerInput.email,
      username: registerInput.email,
      password: hashedPassword,
      salt,
      status: 'Registered', // TODO: need proper email verification process
      createdBy: sysUser._id,
      modifiedBy: sysUser._id
    })

    return user
  }
}
