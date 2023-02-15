import { Module } from '@nestjs/common'
import { CommandsModule } from './commands/commands.module'
import { LoggerModule } from '@m8a/logger'
import { CliLibModule } from './utils/cli-lib.module'
import { CommandsLocalModule } from './commands-local/commands-local.module'

@Module({
  imports: [CommandsModule, LoggerModule, CliLibModule, CommandsLocalModule],
  providers: [],
  exports: []
})
export class AppModule { }
