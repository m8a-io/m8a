import { Module } from '@nestjs/common'
import { dotenvLoader, selectConfig, TypedConfigModule } from 'nest-typed-config'
import { EnvironmentVariables } from './env.schema'

export const ConfigModule = TypedConfigModule.forRoot({
  schema: EnvironmentVariables,
  load: dotenvLoader({
    envFilePath: '.m8a.env'
  }),
  normalize (config) {
    config.PORT = parseInt(config.PORT, 10)
    config.DB_PORT = parseInt(config.DB_PORT, 10)
    return config
  }
})

@Module({
  imports: [
    ConfigModule
  ],
  providers: [],
  exports: []
})
export class RootConfigModule { }

export const envConfig = selectConfig(ConfigModule, EnvironmentVariables)
