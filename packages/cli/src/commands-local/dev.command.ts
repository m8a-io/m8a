import { Command, CommandRunner } from 'nest-commander'
import { RunnerService } from '../utils/runner.service'
import { DevLoggerService } from '@m8a/logger'

@Command({ name: 'dev', description: 'The "dev" command will start a local development server for the package you are currently in.' })
export class DevCommand extends CommandRunner {
  constructor (
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService
  ) {
    super()
  }

  async run (passedParams: string[]): Promise<void> {
    this.runDev()
  }

  private runDev (): void {
    this.logService.addLine()
    this.logService.log('Starting your dev environment....')
    this.runnerService.spawnSync('pnpm', ['start:dev'])
  }
}
