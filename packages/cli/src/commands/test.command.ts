import { Command, CommandRunner, Option } from 'nest-commander'
import { DevLoggerService } from '@m8a/logger'
import { CheckForService } from '@m8a/cli-lib'
import { Injectable } from '@nestjs/common'

@Injectable()
@Command({ name: 'test', description: 'Checks for dev environment.' })
export class TestCommand implements CommandRunner {
  constructor(
    private readonly logService: DevLoggerService,
    private readonly checkFor: CheckForService) {}

  async run (passedParams: string[]): Promise<void> {
    this.logService.log(`Testing your development environment....`)
    if (this.checkFor.nodeJS() && this.checkFor.docker() && this.checkFor.packageManager()) {
      this.logService.success('Your system is ready for the m8a platform!')
    } else {
      this.logService.error('Your system needs some love to be able to develop with the m8a platform.')
    }
    process.exit(1)
  }
}
