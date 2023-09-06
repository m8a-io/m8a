import { Command, CommandRunner, Option } from 'nest-commander'
import { DevLoggerService } from '@m8a/logger'
import { RunnerService } from '../utils/runner.service'
import * as rushLib from '@microsoft/rush-lib'
import * as path from 'path'
import * as fs from 'fs/promises'
import Dag from 'dag-map'
import { RushConfigurationProject } from '@microsoft/rush-lib'
import { WatchManager } from '../utils/watch/watch-manager'
import { WatchProject } from '../utils/watch/watch-project'

@Command({
  name: 'dev',
  description: 'The "dev" command will start dev builds with watchers for development of the app given.'
})
export class DevCommand extends CommandRunner {
  constructor (
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService,
    private readonly watchManager: WatchManager
  ) {
    super()
  }

  args: string[] = []
  option = ''

  async run (passedParams: string[], options): Promise<void> {
    if (Object.keys(options).length !== 0 && passedParams.length >= 1) {
      this.logService.error(
        'If you use the --and-deps or --just-deps flags, you may only add one app name as an option.'
      )
      process.exit(1)
    }
    if (passedParams.length >= 1) this.args = passedParams
    if (Object.keys(options).length !== 0) this.option = Object.keys(options)[0]
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
    this.args.push(app)
    return app
  }

  @Option({
    flags: '--just-deps <app>',
    description: 'This flag indicates the dependencies of your app will also be built and watched.'
  })
  parseJustDeps (app: string) {
    this.args.push(app)
    return app
  }

  private async runDev (): Promise<void> {
    this.logService.addLine()
    this.logService.log('Starting your dev environment....')
    const projects = this._gatherProjects()

    // TODO: remove: this.logService.log('projects: ', projects)

    const dag = new Dag()
    for (const [name, project] of projects.entries()) {
      const deps = project.localDependencyProjects.map((p) => p.packageName).filter((p) => projects.has(p))
      dag.add(name, project, [], deps)
    }

    const inOrder = []
    const watchProjects = []
    dag.each((name, project: RushConfigurationProject) => {
      const projectDependencies = new Array(...project.dependencyProjects)
      // TODO remove: this.logService.log(`${name}: ${projectDependencies}`)
      inOrder.push(project)
      if (projectDependencies.length === 0) {
        watchProjects.push(new WatchProject(name, this.logService))
      } else {
        const directProjectDependency = new WatchProject(
          projectDependencies[0].unscopedTempProjectName,
          this.logService
        )
        watchProjects.push(new WatchProject(name, this.logService, [directProjectDependency]))
      }
    })
    this.watchManager.initialize(watchProjects)
    this.logService.log('Watch Manager initialized...')
    // this.logService.log('watchProjects: ', watchProjects)
    for (const project of inOrder) {
      await this._startBuilding(
        project,
        watchProjects.find((p) => p.name === project.packageName)
      )
    }
    this.logService.addLine()
    this.logService.log('All watchers started!')
  }

  private async _startBuilding (
    project: { packageName: string; projectFolder: string },
    watchProject: WatchProject
  ) {
    this.logService.log(`Starting to build ${project.packageName}`)
    const pathToPackageJson = path.join(project.projectFolder, 'package.json')
    const packageJson = JSON.parse(await fs.readFile(pathToPackageJson, 'utf-8'))
    const devCommand = packageJson.scripts.dev
    if (!devCommand) {
      this.logService.warn(`${project.packageName} has no dev command`)
      return Promise.resolve()
    }

    const command = ['dev']

    if (devCommand.includes('tsc')) {
      command.push('--preserveWatchOutput')
    }
    // we know that pnpm will be installed globally in the m8a workspace
    this.runnerService.spawnDevCommandAsync('pnpm', command, project, watchProject)
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
    // possible for package aliases later
    const aliases = {}

    for (const arg of this.args) {
      const actualArg = aliases[arg] || arg
      const project = rushConfig.findProjectByShorthandName(actualArg)
      if (!project) {
        this.logService.error(`Could not find project ${arg}`)
        process.exit(1)
      }
      this.logService.log('this.option: ', this.option)
      if (this.option !== 'justDeps') {
        this.logService.log('justDeps was hit')
        projects.set(project.packageName, project)
      }

      if (this.option === 'andDeps' || this.option === 'justDeps') {
        this.logService.log('recursing project deps')
        recurseProjectDeps(project)
      }
    }
    return projects
  }
}
