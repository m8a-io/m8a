import { IsDefined, IsNumber, IsString } from 'class-validator'

export class EnvironmentVariables {
  @IsDefined()
    NODE_ENV = 'development'

  @IsNumber()
    PORT = '3001'

  @IsString()
    COOKIE_SECRET = 'SomeSecretShouldOneBeForgotten'

  @IsString()
    DB_NAME = 'dev'

  @IsString()
    DB_CONNECTION = 'mongodb://localhost'

  @IsNumber()
    DB_PORT = '27017'

  @IsString()
    DB_USERNAME = ''

  @IsString()
    DB_PASSWORD = ''

  @IsString()
    GQL_PATH = 'graphql'

  @IsString()
    ACCESS_SECRET!: string

  @IsString()
    ACCESS_TTL!: string

  @IsString()
    REFRESH_SECRET!: string

  @IsString()
    REFRESH_TTL!: string
}
