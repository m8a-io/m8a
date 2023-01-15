import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { JwtModule as JModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'
import { m8aAuthzGuard } from './m8a.authz.guard'
import { ConfigModule } from '../config/env/env-config.module'
import { AbilityService } from './ability.service'

export const JwtModule = JModule.register({
  secret: 'someSecretValueForAccess'
})

@Module({
  imports: [ConfigModule, UserModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: m8aAuthzGuard
    },
    AbilityService
  ],
  exports: []
})
export class AuthzModule { }
