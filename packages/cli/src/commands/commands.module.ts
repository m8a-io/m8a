import { Module } from '@nestjs/common'
import { LoggerModule } from '@m8a/logger'
import { DevCommand } from './dev.command'
import { UtilsModule } from '../utils/utils.module'

@Module({
  imports: [LoggerModule, UtilsModule],
  providers: [DevCommand],
  exports: []
})
export class CommandsModule {}
