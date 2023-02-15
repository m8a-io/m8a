import { Command, CommandRunner } from 'nest-commander'
import { DevLoggerService } from '@m8a/logger'
import { Injectable } from '@nestjs/common'

@Injectable()
@Command({ name: 'version', description: 'Checks for CLI version.', aliases: ['-v'] })
export class VersionCommand extends CommandRunner {
  constructor (
    private readonly logService: DevLoggerService) {
    super()
  }

  async run (): Promise<void> {
    this.logService.log('v0.0.1')
    process.exit(1)
  }
}
