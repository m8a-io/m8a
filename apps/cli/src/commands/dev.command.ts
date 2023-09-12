import { Command, CommandRunner, Option } from 'nest-commander'
import { DevLoggerService } from '@m8a/logger'
import * as rushLib from '@microsoft/rush-lib'
import Dag from 'dag-map'
import { RushConfigurationProject } from '@microsoft/rush-lib'
import { WatchManager } from '../utils/watch/watch-manager'
import { WatchProject } from '../utils/watch/watch-project'
import { EventEmitter2 } from '@nestjs/event-emitter'

@Command({
  name: 'dev',
  description: 'The "dev" command will start dev builds with watchers for development of the app given.'
})
export class DevCommand extends CommandRunner {
  constructor (
    private readonly logService: DevLoggerService,
    private readonly watchManager: WatchManager,
    private eventEmitter: EventEmitter2
  ) {
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
    description: 'This flag indicates the dependencies of your app will also be built and watched.'
  })
  parseJustDeps (app: string) {
    this.projects.push(app)
    return app
  }

  private async runDev (): Promise<void> {
    this.logService.addLine()
    this.logService.log('Starting your dev environment....')
    const projects = this._gatherProjects()

    const dag = new Dag()

    for (const [name, project] of projects.entries()) {
      const deps = project.localDependencyProjects.map((p) => p.packageName).filter((p) => projects.has(p))
      dag.add(name, project, [], deps)
    }

    const inOrder = []
    const watchProjects = []

    dag.each((name, project: RushConfigurationProject) => {
      // const projectDependencies = new Array(...project.dependencyProjects)
      inOrder.push(project)
      if (watchProjects.length === 0) {
        watchProjects.push(new WatchProject(name, this.eventEmitter))
      } else {
        const directDependency = new Array(watchProjects[watchProjects.length - 1])
        watchProjects.push(new WatchProject(name, this.eventEmitter, directDependency))
      }
    })

    this.watchManager.initialize(watchProjects)

    this.logService.addLine()

    this.watchManager.startDevWatchers(inOrder)
  }

  private _gatherProjects () {
    const rushConfig = rushLib.RushConfiguration.loadFromDefaultLocation({
      startingFolder: process.cwd()
    })

    const projects = new Map()

    const recurseProjectDeps = (project: rushLib.RushConfigurationProject) => {
      for (const dep of project.dependencyProjects) {
        if (projects.has(dep.packageName)) {
          continue
        }

        projects.set(dep.packageName, dep)
        recurseProjectDeps(dep)
      }
    }

    for (const proj of this.projects) {
      const project = rushConfig.findProjectByShorthandName(proj)
      if (!project) {
        this.logService.error(`Could not find project ${proj}`)
        process.exit(1)
      }
      if (this.option !== 'justDeps') {
        projects.set(project.packageName, project)
      }

      if (this.option === 'andDeps' || this.option === 'justDeps') {
        recurseProjectDeps(project)
      }
    }
    return projects
  }
}
