import { Module } from '@nestjs/common'
import { TestCommand } from './test.command';
import { LoggerModule } from '@m8a/logger'
import { DevCommand } from './dev.command';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [LoggerModule, UtilsModule],
  providers: [DevCommand, TestCommand],
  exports: []
})
export class CommandsModule { }
