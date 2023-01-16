import { Command, CommandRunner, Option } from 'nest-commander'
import { DevLoggerService } from '@m8a/logger'
import { CheckForService, RunnerService } from '@m8a/cli-lib'

@Command({ name: 'down', description: 'The "down" command will shut down your local m8a dev containers.' })
export class DownCommand implements CommandRunner {
  constructor(
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService,
    private readonly checkFor: CheckForService
  ) {}

  async run (passedParams: string[]): Promise<void> {
    this.dockerDown()
    process.exit(1)
  }

  private dockerDown (): void {
    const hasDocker = this.checkFor.docker()
    const hasNerdctl = this.checkFor.nerdctl()

    if (hasDocker || hasNerdctl) {
      this.logService.log('Stopping your containers....')
      hasDocker
        ? this.runnerService.spawnSync('docker', ['compose','down'])
        : this.runnerService.spawnSync('nerdctl', ['compose','down'])
      this.logService.addLine()
      this.logService.success('Your containers have been stopped and removed. Cya later!')
      this.logService.addLine()
    }
  }
}
