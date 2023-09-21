import { Module } from '@nestjs/common'
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { UserEntity } from './entities/user.entity'
import { UserAssembler, UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { UserDTO, UserInputDTO, UserUpdateDTO } from '.'
import { HashService } from './hash.service'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { UserHelloWorldListener } from './user-listener'
import { UserAuthAssembler, UserAuthService } from './user-auth.service'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature([UserEntity])],
      services: [UserService, UserAuthService, HashService], // TODO: need to move HashService to auth
      assemblers: [UserAssembler, UserAuthAssembler],
      resolvers: [],
      dtos: [
        {
          DTOClass: UserDTO,
          CreateDTOClass: UserInputDTO,
          UpdateDTOClass: UserUpdateDTO
        }
      ]
    }),
    EventEmitterModule.forRoot()
  ],
  providers: [UserService, UserAuthService, UserResolver, HashService, UserHelloWorldListener],
  exports: [UserService, UserAuthService, HashService]
})
export class UserModule {}
