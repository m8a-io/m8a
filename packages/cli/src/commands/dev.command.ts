import { Command, CommandRunner } from 'nest-commander'
import { CheckForService } from '../utils/checkFor.service'
import { DevLoggerService } from '@m8a/logger'
import { RunnerService } from '../utils/runner.service'

@Command({
  name: 'dev',
  description: 'The "dev" command will start a local development server.'
})
export class DevCommand extends CommandRunner {
  constructor (
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService,
    private readonly checkFor: CheckForService
  ) {
    super()
  }

  async run (passedParams: string[]): Promise<void> {
    this.runApiDev(passedParams)
  }

  private runApiDev (passedParams): void {
    if (passedParams === 'api') {
      this.logService.addLine()
      this.logService.log('Starting your API dev environment....')
      this.runnerService.spawnSync('pnpm', ['start:dev'])
    }
  }
}
