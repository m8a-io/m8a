import {
  Assembler,
  AssemblerQueryService,
  ClassTransformerAssembler,
  QueryService,
  InjectQueryService
} from '@ptc-org/nestjs-query-core'
import { RegisterInputDTO } from '../auth/dtos/register.input.dto'
import { UserEntity } from './user.entity'
import { Injectable } from '@nestjs/common'
import { UserDTO } from './dtos/user.dto'
import { HashService } from './hash.service'
import { GraphQLError } from 'graphql'
import { EventEmitter2 } from '@nestjs/event-emitter'

@Assembler(UserDTO, UserEntity)
export class UserAssembler extends ClassTransformerAssembler<UserDTO, UserEntity> {}

@Injectable()
@QueryService(UserDTO)
export class UserService extends AssemblerQueryService<UserDTO, UserEntity> {
  constructor (
    readonly assembler: UserAssembler,
    @InjectQueryService(UserEntity)
    private readonly userService: QueryService<UserEntity>,
    private readonly hashService: HashService,
    private eventEmitter: EventEmitter2
  ) {
    super(assembler, userService)
  }

  public helloWorld (): string {
    this.eventEmitter.emit('hello.world')
    return 'Hello World!!!!'
  }

  /**
   * Process to register the new user
   * @param registerInput
   * @returns
   */
  public async register (registerInput: RegisterInputDTO): Promise<UserEntity> {
    const passWithSalt = await this.hashService.getPasswordWithSalt(registerInput.password)
    const salt = await this.hashService.getSaltFromPasswordHash(passWithSalt)
    const hashedPassword = await this.hashService.hashPassword(passWithSalt)

    const result = await this.userService.query({
      filter: {
        username: { eq: 'admin@m8a.io.admin' }
      }
    })

    if (result.length === 0) {
      throw new GraphQLError(
        'There was a problem with locating the system user for the registration process. Please see your admin for help.',
        {
          extensions: {
            code: 'FORBIDDEN',
            myExtension: 'm8a-error-code-1001'
          }
        }
      )
    }

    const sysUser = result[0]

    const locatedUser = await this.userService.query({
      filter: {
        username: { eq: registerInput.email }
      }
    })

    if (locatedUser && locatedUser.length === 1) {
      throw new GraphQLError('This user already exists.', {
        extensions: {
          code: 'FORBIDDEN',
          myExtension: 'm8a-error-code-1002'
        }
      })
    }

    const user = await this.userService.createOne({
      firstName: registerInput.firstName,
      lastName: registerInput.lastName,
      email: registerInput.email,
      username: registerInput.email,
      passwordHash: hashedPassword,
      salt,
      status: 'Registered', // TODO: need proper email verification process
      createdBy: sysUser._id,
      modifiedBy: sysUser._id
    })

    return user
  }
}
