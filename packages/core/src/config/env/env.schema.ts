import { IsDefined, IsNumber, IsString } from 'class-validator'

export class EnvironmentVariables {
  @IsDefined()
    NODE_ENV!: string

  @IsNumber()
    PORT!: string

  @IsString()
    COOKIE_SECRET!: string

  @IsString()
    DB_HOST!: string

  @IsString()
    DB_NAME!: string

  @IsNumber()
    DB_PORT!: string

  @IsString()
    DB_USERNAME!: string

  @IsString()
    DB_PASSWORD!: string

  @IsString()
    CACHE_HOST!: string

  @IsString()
    CACHE_NAME!: string

  @IsNumber()
    CACHE_PORT!: string

  @IsString()
    CACHE_USERNAME!: string

  @IsString()
    CACHE_PASSWORD!: string

  @IsString()
    GQL_PATH!: string

  @IsString()
    ACCESS_SECRET!: string

  @IsString()
    ACCESS_TTL!: string

  @IsString()
    REFRESH_SECRET!: string

  @IsString()
    REFRESH_TTL!: string
}
