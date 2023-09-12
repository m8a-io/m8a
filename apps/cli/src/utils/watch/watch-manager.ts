// Partial credit for this code goes to RushStack: lightwatch-plugin

import { Injectable } from '@nestjs/common'
import { WatchProject, WatchState } from './watch-project'
import { DevLoggerService } from '@m8a/logger'
import * as path from 'path'
import * as fs from 'fs/promises'
import { RunnerService } from '../runner.service'
import { RushConfigurationProject } from '@microsoft/rush-lib'
import { ChildProcess } from 'child_process'
import { WriteBuildEvent } from './write-build.event'
import kill = require('tree-kill')

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
    private readonly runnerService: RunnerService
  ) {}

  /**
   *
   * @param projects
   */
  public initialize (projects: WatchProject[]): void {
    this.projects.length = 0
    this.projects.push(...projects)

    for (const project of projects) {
      this._calculateCriticalPathLength(project)
    }
  }

  /**
   * Starts the dev commands which watch the project builds of dependent projects
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
    // if (this.devRunner) {
    //   this.devRunner.
    // }
    this.devRunner = this.runnerService.spawnDevAppCommand(
      'pnpm',
      ['run', 'dev'],
      this.projectConfigs.find((p) => p.packageName === this.devServerProject.name)
    )

    if (this.devRunner) {
      // console.log('PID of the dev server app: ', this.devRunner.pid)
      this.devServerActivated = true
      this.activeProject = undefined
    }
  }

  /**
   * Kills the dev server application
   */
  public killDevServerApp () {
    if (this.devRunner) {
      // console.log('killed dev server')
      kill(this.devRunner.pid, 'SIGKILL')
      this.devServerActivated = false
    }
  }

  /**
   * Controls the output of the dependency projects' dev commands
   * @param payload
   * @type WriteBuildEvent
   */
  // TODO: create a type for the writeBuildLines payload
  public writeBuildLines (payload: WriteBuildEvent): void {
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

    if (project.state === WatchState.Succeeded) {
      project.setState(WatchState.Building)
    }

    if (this.activeProject === undefined) {
      this._activateProject(project)
    } else {
      project.printBufferedLines()
    }
  }

  /**
   *
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

    this._printCompletedAndActivateSomething()
  }

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
      this.logService.log('No dev server project found. Running watchers on dependent project builds only.')
    }
  }

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

  private async _startBuildingDepProjects (
    project: { packageName: string; projectFolder: string },
    watchProject: WatchProject
  ) {
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
      // TODO: Sort them chronologically? Or topologically?
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
      // console.log('we can start the dev server app at printCompleted: ', this._canStartDevServerApp(), this._canStartDevServerApp(), this.devRunner ? this.devRunner.pid : 'no dev runner')
      if (this._canStartDevServerApp() && !this.devRunner) {
        this.startDevServerApp()
      }
    }
  }

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

  private _activateProject (project: WatchProject): void {
    // console.log('we should stop the dev server at _activateProject: ', this.devServerActivated && this.activeProject === undefined, 'project: ', project.name)
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
      // console.log('we can start the dev server app at clearActiveProject: ', this._canStartDevServerApp(), this.devRunner ? this.devRunner.pid : 'no dev runner')
      if (this._canStartDevServerApp()) {
        this.startDevServerApp()
      }
    }
  }

  private _canStartDevServerApp (): boolean {
    return !this.projects.some((p) => p.state !== WatchState.Succeeded)
  }
}
