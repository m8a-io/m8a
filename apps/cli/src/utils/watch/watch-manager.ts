// Credit for this code goes to RushStack: lightwatch-plugin

import { Injectable } from '@nestjs/common'
import { WatchProject, WatchState } from './watch-project'
import { DevLoggerService } from '@m8a/logger'

@Injectable()
export class WatchManager {
  public readonly projects: WatchProject[] = []
  public activeProject: WatchProject | undefined

  public constructor (private readonly logService: DevLoggerService) {}

  public initialize (projects: WatchProject[]): void {
    this.projects.length = 0
    this.projects.push(...projects)

    for (const project of projects) {
      this._calculateCriticalPathLength(project)
    }
  }

  public writeBuildLines (project: WatchProject, lines: string[]): void {
    project.setState(WatchState.Building)
    project.bufferedLines.push(...lines)

    if (this.activeProject !== undefined && this.activeProject !== project) {
      if (!this.activeProject.live) {
        // Interrupt the currently active project
        this.logService.log('>>> (interrupted by upstream project)')
        this.activeProject = undefined
      }
    }

    if (project.live) {
      if (this.activeProject === undefined) {
        this._activateProject(project)
      } else if (project.live) {
        project.printBufferedLines(this.logService)
      }
    }
  }

  public markSucceeded (project: WatchProject): void {
    project.setState(WatchState.Succeeded)

    // If this project was active, print its results
    if (this.activeProject === project) {
      this._clearActiveProject()
    }

    this._printCompletedAndActivateSomething()
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
    this.activeProject = project
    this.logService.log(`>>> BUILDING ${project.name} -----------------------------------`)
    // Print any buffered data
    project.printBufferedLines(this.logService)
  }

  private _clearActiveProject (): void {
    if (this.activeProject !== undefined) {
      this.activeProject.printBufferedLines(this.logService)
      switch (this.activeProject.state) {
      case WatchState.Succeeded:
        this.logService.success(`>>> ${this.activeProject.name} -----------------------------------`)
        break
      case WatchState.Failed:
        this.logService.error(`>>> ${this.activeProject.name} -----------------------------------`)
        break
      default:
        throw new Error('Invalid state')
      }
      this.activeProject = undefined
    }
  }
}
