import { Command, CommandRunner, Option } from 'nest-commander'
import { CheckForService } from '../utils/checkFor.service'
import { DevLoggerService } from '@m8a/logger'
import { RunnerService } from '../utils/runner.service'

@Command({
  name: 'dev',
  description:
    'The "dev" command (with one of the app types option) will start a local development server for that app type (i.e. "app" or "api" or "cli").'
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
    if (passedParams.length > 1) {
      this.logService.log('You can only give the "dev" command one option at a time.')
    }
    const appType = passedParams[0].toLowerCase()
    if (appType === 'api') {
      this.runApiDev(appType)
    } else if (appType === 'app') {
      this.runAppDev(appType)
    } else {
      this.logService.log(`You've given an unknown option to the "dev" command. ${appType}?`)
      this.logService.log('Please try again!')
    }
  }

  @Option({
    flags: 'api',
    description: 'This will start the api (backend) dev server.'
  })
  private runApiDev (appType: string): void {
    this.logService.addLine()
    this.logService.log(`Moving to the ${appType} folder`)
    process.chdir('/')
    process.chdir(`home/dev/m8a/packages/starter-kit-${appType}`)
    this.logService.log(`Starting your ${appType.toUpperCase()} dev environment....`)
    this.runnerService.spawnSync('pnpm', ['start:dev'])
  }

  @Option({
    flags: 'app',
    description: 'This will start the app (frontend) dev server.'
  })
  private runAppDev (appType: string): void {
    this.logService.addLine()
    this.logService.log(`Moving to the ${appType} folder`)
    process.chdir('/')
    process.chdir(`home/dev/m8a/packages/starter-kit-${appType}`)
    this.logService.log(`Starting your ${appType.toUpperCase()} dev environment....`)
    this.runnerService.spawnSync('quasar', ['dev'])
  }
}
