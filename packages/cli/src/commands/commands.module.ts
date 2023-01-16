import { Module } from '@nestjs/common'
import { TestCommand } from './test.command'
import { CliLibModule } from '@m8a/cli-lib'
import { LoggerModule } from '@m8a/logger'

@Module({
  imports: [LoggerModule, CliLibModule],
  providers: [TestCommand],
  exports: []
})
export class CommandsModule { }
