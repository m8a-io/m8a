import { Module } from '@nestjs/common'
import { InitConfigService } from './init-config.service'
import { UserModule } from '@m8a/core'
import { LoggerModule } from '@m8a/logger'
import { CliLibModule } from '../utils/cli-lib.module'

@Module({
  imports: [LoggerModule, UserModule, CliLibModule],
  providers: [InitConfigService],
  exports: [InitConfigService]
})
export class InitConfigModule { }
