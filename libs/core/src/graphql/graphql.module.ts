import { Module } from '@nestjs/common'
import { GraphqlService } from './graphql.service'
import { GraphQLModule as GQLModule } from '@nestjs/graphql'
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs'
import { IFastifyRequest, IFastifyReply } from '../base'

@Module({
  imports: [
    GQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: () => {
        return {
          path: process.env.GQL_PATH,
          autoSchemaFile: true,
          // jit: 5,
          // context: (request: FastifyRequest, reply: FastifyReply) => {
          //   console.log('response ', reply)
          //   return {
          //   req: request,
          //   res: reply
          // }
          // },
          jit: 5,
          context: (request: IFastifyRequest, reply: IFastifyReply) => {
            return {
              req: request,
              res: reply
            }
          },
          subscription: {
            context: (request: IFastifyRequest, reply: IFastifyRequest) => ({ req: request, res: reply })
          }
        }
      }
    })
  ],
  providers: [GraphqlService],
  exports: [GraphqlService]
})
export class GraphQLModule {}
