import { Module } from '@nestjs/common'
import { RunnerService } from './runner.service'
import { CheckForService } from './check-for.service'
import { LoggerModule } from '@m8a/logger'
import { WatchManager } from './watch/watch-manager'

@Module({
  imports: [LoggerModule],
  providers: [RunnerService, CheckForService, WatchManager],
  exports: [CheckForService, RunnerService, WatchManager]
})
export class UtilsModule {}
