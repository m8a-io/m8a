import { Module } from "@nestjs/common";
import { TypegooseModule } from "@m8a/nestjs-typegoose";
import { MongoMemoryServer } from "mongodb-memory-server";

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory: async () => {
        const mongod = new MongoMemoryServer();
        return {
          autoIndex: true,
        };
      },
    }),
  ],
})
export class TestDatabaseModule {}
