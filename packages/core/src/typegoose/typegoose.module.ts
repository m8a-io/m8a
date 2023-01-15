import { Module } from '@nestjs/common'
import { TypegooseModule as Typegoose } from '@m8a/nestjs-typegoose'
import { ConfigModule, envConfig } from '../config'

@Module({
  imports: [
    ConfigModule,
    Typegoose.forRootAsync({
      useFactory: () => ({
        uri: `${envConfig.DB_CONNECTION}:${envConfig.DB_PORT}/${envConfig.DB_NAME}`,
        autoIndex: envConfig.NODE_ENV === 'development',
        serverSelectionTimeoutMS: 10000
      })
    })
  ],
  providers: [],
  exports: []
})
export class TypegooseModule { }
