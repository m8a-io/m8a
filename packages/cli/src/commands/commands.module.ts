import { Module } from '@nestjs/common'
import { TestCommand } from './test.command'
import { CliLibModule } from '../utils/cli-lib.module'
import { LoggerModule } from '@m8a/logger'
import { VersionCommand } from './version.command'

@Module({
  imports: [LoggerModule, CliLibModule],
  providers: [TestCommand, VersionCommand],
  exports: []
})
export class CommandsModule { }
