import { IsDefined, IsNumber, IsString } from 'class-validator'

export class EnvironmentVariables {
  @IsDefined()
  NODE_ENV: string = 'development'

  @IsNumber()
  PORT: string = '3001'

  @IsString()
  COOKIE_SECRET: string = 'SomeSecretShouldOneBeForgotten'

  @IsString()
  DB_NAME: string = 'dev'

  @IsString()
  DB_CONNECTION: string = 'mongodb://localhost'

  @IsNumber()
  DB_PORT: string = '27017'

  @IsString()
  DB_USERNAME: string = ''

  @IsString()
  DB_PASSWORD: string = ''

  @IsString()
  GQL_PATH: string = 'graphql'

  @IsString()
  ACCESS_SECRET!: string

  @IsString()
  ACCESS_TTL!: string

  @IsString()
  REFRESH_SECRET!: string

  @IsString()
  REFRESH_TTL!: string

}
