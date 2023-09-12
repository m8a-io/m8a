import { Module } from '@nestjs/common'
import { RunnerService } from './runner.service'
import { CheckForService } from './checkFor.service'
import { LoggerModule } from '@m8a/logger'
import { WatchManager, WatchListeners } from './watch'

@Module({
  imports: [LoggerModule],
  providers: [RunnerService, CheckForService, WatchManager, WatchListeners],
  exports: [CheckForService, RunnerService, WatchManager]
})
export class UtilsModule {}
