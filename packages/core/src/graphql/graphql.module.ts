import { Module } from "@nestjs/common";
import { GraphqlService } from "./graphql.service";
import { GraphQLModule as GQLModule } from "@nestjs/graphql";
import { YogaDriver, YogaDriverConfig } from "@graphql-yoga/nestjs";
import { FastifyRequest, FastifyReply } from "fastify";

@Module({
  imports: [
    GQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: () => {
        return {
          autoSchemaFile: true,
          path: process.env.GQL_PATH,
          // jit: 5,
          context: (request: FastifyRequest, reply: FastifyReply) => ({
            req: request,
            res: reply,
          }),
          subscription: {
            context: (request, reply) => ({ req: request, res: reply }),
          },
        };
      },
    }),
  ],
  providers: [GraphqlService],
  exports: [GraphqlService],
})
export class GraphQLModule {}
