import { Module } from '@nestjs/common'
import { CommandsModule } from './commands/commands.module'
import { LoggerModule } from '@m8a/logger'

@Module({
  imports: [CommandsModule, LoggerModule],
  providers: [],
  exports: []
})
export class AppModule { }
