import { Command, CommandRunner } from 'nest-commander'
import { CheckForService } from '@m8a/cli-lib'
import { DevLoggerService } from '@m8a/logger'
import { RunnerService } from '@m8a/cli-lib'

@Command({ name: 'up', description: `The "up" command will either start the necessary docker containers for your local m8a dev platform or, if starting for the first time, it will also help you initialize a development environment to develop with the m8a platform locally. The counterpart command is "m8a down".` })
export class UpCommand implements CommandRunner {
  constructor(
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService,
    private readonly checkFor: CheckForService
  ) {}

  async run (passedParams: string[]): Promise<void> {
    this.dockerUp()
  }

  private dockerUp (): void {
    this.logService.addLine()
    const hasDocker = this.checkFor.docker()
    const hasNerdctl = this.checkFor.nerdctl()

    if (hasDocker || hasNerdctl) {
      this.logService.log('Starting your containers....')
      hasDocker
        ? this.runnerService.spawnSync('docker', ['compose','up', '-d'])
        : this.runnerService.spawnSync('nerdctl', ['compose','up', '-d'])
      this.logService.addLine()
      this.logService.success('Your Docker containers are up and running!')
      this.logService.addLine()
      process.exit(1)
    } else {
      this.logService.error('Sorry. Rancher Desktop needs to be installed and/ or running.')
      this.logService.addLine()
      process.exit(1)
    }
  }
}
