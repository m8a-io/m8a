/**
 * The following code is a derivative work of the code from the RushStack project's lightwatch-plugin
 * which is licensed MIT and the dimfeld/rush-dev-watcher project which is also MIT licensed.
 * */

import { Injectable } from '@nestjs/common'
import { WatchProject, WatchState } from './watch-project'
import { DevLoggerService } from '@m8a/logger'
import * as path from 'path'
import * as fs from 'fs/promises'
import * as rushLib from '@microsoft/rush-lib'
import Dag from 'dag-map'
import { RunnerService } from '../runner.service'
import { RushConfigurationProject } from '@microsoft/rush-lib'
import { ChildProcess } from 'child_process'
import { WriteBuildEvent } from './write-build.event'
import kill = require('tree-kill')
import { EventEmitter2 } from '@nestjs/event-emitter'

@Injectable()
export class WatchManager {
  public projects: WatchProject[] = []
  public activeProject: WatchProject | undefined
  public devServerProject: WatchProject | undefined
  public devServerActivated = false
  public depProjects: WatchProject[] = []
  private projectConfigs: RushConfigurationProject[] = []
  private devRunner: ChildProcess | undefined

  public constructor (
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  /**
   * Starts the dev commands which watch the project builds of dependent projects and
   * starts the dev server (the final application)
   * @param projects
   */
  public async startDevWatchers (projects: RushConfigurationProject[]) {
    this.projectConfigs = projects
    const projectsMapped = this.projectConfigs.map((p) => p.packageName).join(' <-- ')
    this.logService.log('Projects to run: ', projectsMapped)
    this._setDevServerProject(this.projectConfigs)
    this._setUpDepProjects()
    // only a dev server project was given to be started and no dependency projects
    if (this.devServerProject && this.projects.length === 0) {
      this.startDevServerApp()
    }
    // this.projects are now our dependency projects only - run them.
    for (const project of this.projects) {
      await this._startBuildingDepProjects(
        this.projectConfigs.find((p) => p.packageName === project.name),
        project
      )
    }
  }

  /**
   * Starts the dev command, which should start a dev server (i.e. an application)
   * Projects in rush.json must be marked with the tag "dev-server", for the manager to find it
   */
  public startDevServerApp () {
    // we know that pnpm will be installed globally in the m8a workspace
    this.devRunner = this.runnerService.spawnDevServerCommand(
      'pnpm',
      ['run', 'dev'],
      this.projectConfigs.find((p) => p.packageName === this.devServerProject.name)
    )

    if (this.devRunner) {
      this.devServerActivated = true
      this.activeProject = undefined
    }
  }

  /**
   * Kills the dev server application
   */
  public killDevServerApp () {
    if (this.devRunner) {
      kill(this.devRunner.pid, 'SIGKILL')
      this.devServerActivated = false
    }
  }

  /**
   * Prints the build output of the dependent projects' dev command
   * @param payload
   * @type WriteBuildEvent
   */
  public writeBuildLines (payload: WriteBuildEvent): void {
    const { project, payload: data } = payload
    const outputLines2d = data.toString().split('\n')
    const outputLines = [].concat(...outputLines2d)
    project.bufferedLines.push(...outputLines)
    if (project.state === WatchState.Pending) {
      project.setState(WatchState.Start)
    }
    if (this.activeProject !== undefined && this.activeProject !== project) {
      if (!this.activeProject.live) {
        // Interrupt the currently active project
        this.logService.log('>>> (interrupted by upstream project)')
        this.activeProject = undefined
      }
    }

    // if (project.state === WatchState.Succeeded) {
    //   project.setState(WatchState.Building)
    // }

    if (this.activeProject === undefined) {
      this._activateProject(project)
    }
    project.printBufferedLines()
  }

  /**
   * Prints the error output of the dependent projects' dev command
   * @param payload
   * @type WriteBuildEvent
   */
  public writeErrorLines (payload: WriteBuildEvent): void {
    const { project, payload: data } = payload
    const outputLines2d = data.toString().split('\n')
    const outputLines = [].concat(...outputLines2d)
    project.bufferedLines.push(...outputLines)

    if (this.activeProject !== undefined && this.activeProject !== project) {
      if (!this.activeProject.live) {
        // Interrupt the currently active project
        this.logService.log('>>> (interrupted by upstream project)')
        this.activeProject = undefined
      }
    }

    project.printBufferedErrorLines()
  }

  /**
   * External control to mark a project as successfully built
   * @param project
   */
  public markSucceeded (project: WatchProject): void {
    project.setState(WatchState.Succeeded)

    // If this project was active, print its results
    if (this.activeProject === project) {
      this._clearActiveProject()
    } else {
      this._printCompletedAndActivateSomething()
    }
  }

  /**
   * External control to mark a project as unsuccessfully built i.e. an error occurred
   * @param project
   */
  public markFailed (project: WatchProject): void {
    project.setState(WatchState.Failed)

    if (this.activeProject !== undefined) {
      // If this failure caused the currently active project to become dead, then interrupt it
      if (!this.activeProject.live) {
        this.logService.log('>>> (interrupted by upstream project)')
        this._clearActiveProject()
      } else {
        // If we wanted to see failures as soon as possible, we could also interrupt a live
        // project that is still building.  However being "live" means that its
        // success/failure is still interesting to the developer, so let's not disrupt the stream.
      }
    }
    this.logService.error(`>>> ${project.name} failed to build! Still watching --------`)
    this._printCompletedAndActivateSomething()
  }

  /**
   * Sets up projects to be ready for building
   * @param projectsToWatch
   * @param option
   * @returns a set of projects ready for building
   */
  public setupProjects (projectsToWatch: string[], option: string) {
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

    for (const proj of projectsToWatch) {
      const project = rushConfig.findProjectByShorthandName(proj)
      if (!project) {
        this.logService.error(`Could not find project ${proj}`)
        process.exit(1)
      }
      if (option !== 'justDeps') {
        projects.set(project.packageName, project)
      }

      if (option === 'andDeps' || option === 'justDeps') {
        recurseProjectDeps(project)
      }
    }

    const inOrder = this._organizeProjects(projects)

    return inOrder
  }

  /**
   * Organizes projects so that they are in order of dependency
   * @param projects
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _organizeProjects (projects: Map<any, any>): RushConfigurationProject[] {
    // set up projects to be watched
    const dag = new Dag()
    const inOrder = []
    const watchProjects = []

    for (const [name, project] of projects.entries()) {
      const deps = project.localDependencyProjects.map((p) => p.packageName).filter((p) => projects.has(p))
      dag.add(name, project, [], deps)
    }

    dag.each((name, project: RushConfigurationProject) => {
      inOrder.push(project)
      if (watchProjects.length === 0) {
        watchProjects.push(new WatchProject(name, this.eventEmitter))
      } else {
        const directDependency = new Array(watchProjects[watchProjects.length - 1])
        watchProjects.push(new WatchProject(name, this.eventEmitter, directDependency))
      }
    })

    this._initialize(watchProjects)

    return inOrder
  }

  /**
   *  Initializes the dependency projects to be watched
   * @param projects
   */
  private _initialize (projects: WatchProject[]): void {
    this.projects.length = 0
    this.projects.push(...projects)

    for (const project of projects) {
      this._calculateCriticalPathLength(project)
    }
  }

  /**
   * Sets the dev server project to be watched
   */
  private _setDevServerProject (projects: RushConfigurationProject[]): void {
    for (const project of projects) {
      // we have two projects given with dev-servers - error out
      if (project.tags.has('dev-server') && this.devServerProject) {
        this.logService.error(
          "There can only be one project with a dev-server. You've entered more than one."
        )
        process.exit(1)
        // we have one project with a dev-server - set it
      } else if (project.tags.has('dev-server')) {
        this.devServerProject = this.projects.find((p) => p.name === project.packageName)
        this.logService.log(`Dev server project: ${project.packageName}`)
        this.logService.addLine()
      }
    }
    if (!this.devServerProject) {
      this.logService.log('No dev server project found. Running dev commands for project(s) given.')
    }
  }

  /**
   * Sets up the dependency projects to be watched
   */
  private _setUpDepProjects (): void {
    if (this.devServerProject) {
      const index = this.projects.findIndex((p) => p.name === this.devServerProject.name)
      this.projects.splice(index, 1)
      // remove dependency entry of last project in the our projects array (now the deps to the dev-server project)
      if (this.projects.length > 1) {
        this.projects[this.projects.length - 1].dependencies.length = 0
      } else if (this.projects.length === 1) {
        this.projects[0].dependencies.length = 0
      } // else there are no dependency projects
    }
  }

  /**
   * Finds if there is a dev command and if there is, runs it
   * @param project
   * @param watchProject
   */
  private async _startBuildingDepProjects (
    project: { packageName: string; projectFolder: string },
    watchProject: WatchProject
  ) {
    const pathToPackageJson = path.join(project.projectFolder, 'package.json')
    const packageJson = JSON.parse(await fs.readFile(pathToPackageJson, 'utf-8'))
    const devCommand = packageJson.scripts.dev
    if (!devCommand) {
      this.logService.warn(`${project.packageName} has no dev command`)
      this.projects.map((p) => {
        if (p.name === project.packageName) {
          p.setState(WatchState.Succeeded)
        }
        return p
      })
      return Promise.resolve()
    }

    const command = ['dev']

    if (devCommand.includes('tsc')) {
      command.push('--preserveWatchOutput')
    }

    if (this.activeProject === undefined) {
      this._activateProject(watchProject)
    }
    // we know that pnpm will be installed globally in the m8a workspace
    this.runnerService.spawnDevCommand('pnpm', command, project, watchProject)
  }

  private _printCompletedAndActivateSomething (): void {
    if (this.activeProject !== undefined) {
      return
    }

    // Is a live project showing a failure?
    let anyFailuresReported = false
    for (const project of this.projects) {
      if (project.live && project.state === WatchState.Failed && project.reported) {
        anyFailuresReported = true
        break
      }
    }

    // 1. Print any live projects that have already succeeded.
    // We avoid printing successes if it would cause already reported failures to scroll away.
    if (!anyFailuresReported) {
      // Sort them chronologically? Or topologically?
      for (const project of this.projects) {
        if (project.live && project.state === WatchState.Succeeded && !project.reported) {
          // Flush the project's output
          this._activateProject(project)
          this._clearActiveProject()
        }
      }
    }

    // 2. Print any live projects with failures
    for (const project of this.projects) {
      if (project.live && project.state === WatchState.Failed && !project.reported) {
        // Flush the project's output
        this._activateProject(project)
        this._clearActiveProject()
        anyFailuresReported = true
      }
    }

    // 3. If we're not in a failure state, then select a currently building
    //    project for realtime output.  Choose a project with minimum criticalPathLength
    if (!anyFailuresReported) {
      // Select a currently building project for realtime output.
      // Choose a project with minimum criticalPathLength
      let candidate: WatchProject | undefined
      for (const project of this.projects) {
        if (project.live && project.state === WatchState.Building) {
          if (candidate === undefined || candidate.criticalPathLength > project.criticalPathLength) {
            candidate = project
          }
        }
      }
      if (candidate !== undefined) {
        this._activateProject(candidate)
      }

      // All dependency projects are built and watching, so we can start the dev server app
      if (this._canStartDevServerApp() && !this.devRunner) {
        this.startDevServerApp()
      }
    }
  }

  /**
   * Calculates the critical path length of a project
   * @param project
   */
  private _calculateCriticalPathLength (project: WatchProject): void {
    if (project.criticalPathLength >= 0) {
      return // already calculated
    }
    if (project.criticalPathLength !== -1) {
      throw new Error(`The project ${project.name} has a cyclic dependency`)
    }

    project.criticalPathLength = -2
    let max = 0
    for (const consumer of project.consumers) {
      this._calculateCriticalPathLength(consumer)
      if (consumer.criticalPathLength > max) {
        max = consumer.criticalPathLength
      }
    }
    project.criticalPathLength = max
  }

  /**
   * Activates a project
   * @param project
   */
  private _activateProject (project: WatchProject): void {
    if (this.devServerActivated || this.activeProject === undefined) {
      this.killDevServerApp()
    }

    this.activeProject = project
    this.logService.log(`>>> BUILDING ${project.name} -----------------------------------`)
    // Print any buffered data
    project.printBufferedLines()
  }

  private _clearActiveProject (): void {
    if (this.activeProject !== undefined) {
      this.activeProject.printBufferedLines()
      switch (this.activeProject.state) {
      case WatchState.Succeeded:
        this.logService.success(`>>> ${this.activeProject.name} built and being watched------------`)
        break
      case WatchState.Failed:
        this.logService.error(`>>> ${this.activeProject.name} -----------------------------------`)
        break
      default:
        throw new Error('Invalid state')
      }

      this.activeProject = undefined

      // All dependency projects are built and watching, so we can start the dev server app
      if (this._canStartDevServerApp()) {
        this.startDevServerApp()
      }
    }
  }

  /**
   * Checks if the dev server app can be started
   */
  private _canStartDevServerApp (): boolean {
    return this.devServerProject && !this.projects.some((p) => p.state !== WatchState.Succeeded)
  }
}
