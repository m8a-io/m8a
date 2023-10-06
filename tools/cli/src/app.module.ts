import { Module } from '@nestjs/common'
import { CommandsModule } from './commands/commands.module'
import { LoggerModule } from '@m8a/logger'
import { EventEmitterModule } from '@nestjs/event-emitter'

@Module({
  imports: [CommandsModule, LoggerModule, EventEmitterModule.forRoot({ global: true })],
  providers: [],
  exports: []
})
export class AppModule {}
