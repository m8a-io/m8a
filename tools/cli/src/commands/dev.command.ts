import { Command, CommandRunner, Option } from 'nest-commander'
import { DevLoggerService } from '@m8a/logger'
import { WatchManager } from '../utils/watch/watch-manager'

@Command({
  name: 'dev',
  description: 'The "dev" command will start dev builds with watchers for development of the app given.'
})
export class DevCommand extends CommandRunner {
  constructor (private readonly logService: DevLoggerService, private readonly watchManager: WatchManager) {
    super()
  }

  projects: string[] = []
  option = ''
  options = {}

  async run (passedParams: string[], opts): Promise<void> {
    this.options = opts
    if (Object.keys(this.options).length !== 0 && passedParams.length >= 1) {
      this.logService.error(
        'If you use the --and-deps or --just-deps flags, you may only add one app name as an option.'
      )
      process.exit(1)
    }

    // projects have been given via the passedParams
    if (passedParams.length >= 1) this.projects = passedParams

    // set the option given, i.e. andDeps or justDeps
    if (Object.keys(this.options).length !== 0) this.option = Object.keys(this.options)[0]
    try {
      this.runDev()
    } catch {
      this.logService.log(`You've given an unknown project to the "dev" command. ${passedParams[0]}?`)
      this.logService.log('Please try again!')
      process.exit(1)
    }
  }

  @Option({
    flags: '--and-deps <app>',
    description: 'This flag indicates the dependencies of your app will also be built and watched.'
  })
  parseAndDeps (app: string) {
    this.projects.push(app)
    return app
  }

  @Option({
    flags: '--just-deps <app>',
    description:
      'This flag indicates only dependencies of your app will be built and watched. Your app (with dev server) will need to be ran in a second terminal.'
  })
  parseJustDeps (app: string) {
    this.projects.push(app)
    return app
  }

  private async runDev (): Promise<void> {
    this.logService.addLine()
    this.logService.log('Starting your dev environment....')

    // get the projects of the monorepo to be watched
    const projectsToWatch = this.watchManager.setupProjects(this.projects, this.option)

    // and run them with watchers
    this.watchManager.startDevWatchers(projectsToWatch)
  }
}
