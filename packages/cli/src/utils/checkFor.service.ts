import { Injectable } from '@nestjs/common'
import { DevLoggerService } from '@m8a/logger'
import { RunnerService } from './runner.service'

@Injectable()
export class CheckForService {
  constructor (private readonly logService: DevLoggerService, private readonly runnerService: RunnerService) {}

  // projectFolder() {}
}
