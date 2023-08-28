import { Module } from '@nestjs/common'
import { NestjsQueryTypegooseModule } from '@ptc-org/nestjs-query-typegoose'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { UserEntity } from './user.entity'
import { UserAssembler, UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { UserDTO, UserInputDTO, UserUpdateDTO } from '.'
import { HashService } from './hash.service'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature([UserEntity])],
      services: [UserService, HashService], // TODO: need to move HashService to auth
      assemblers: [UserAssembler],
      resolvers: [],
      dtos: [
        {
          DTOClass: UserDTO,
          CreateDTOClass: UserInputDTO,
          UpdateDTOClass: UserUpdateDTO
        }
      ]
    })
  ],
  providers: [UserService, UserResolver, HashService],
  exports: [UserService, HashService]
})
export class UserModule {}
