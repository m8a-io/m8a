/**
 * The following code is a derivative work of the code from the RushStack project's lightwatch-plugin
 * which is licensed MIT.
 * */

import { EventEmitter2 } from '@nestjs/event-emitter'
/**
 * The state of a project in the watch mode.
 */
export enum WatchState {
  /** No output received yet */
  Start = 'Start',
  Building = 'Building',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Pending = 'Pending'
}

/**
 * Represents a project in the watch mode.
 */
export class WatchProject {
  private _state: WatchState = WatchState.Start
  private _initialSWCBuildCompleted = false
  public readonly name: string = ''
  private readonly eventEmitter: EventEmitter2
  // eslint-disable-next-line no-use-before-define
  public readonly dependencies: WatchProject[] = []
  // eslint-disable-next-line no-use-before-define
  public readonly consumers: WatchProject[] = []

  private _live = false

  public readonly bufferedLines: string[] = []

  /**
   * Measures the maximum depth of the `consumers` tree, or `0` for a project with no consumers.
   *
   * See this reference for details:
   * https://github.com/microsoft/rushstack/blob/a13865bef9a20dab28c044be3504c7326bfe94b1/apps/rush-lib/src/logic/taskRunner/Task.ts#L72
   *
   * @remarks
   * `-1` means "not calculated yet"
   * `-2` means "calculation has started"
   */
  public criticalPathLength = -1

  /**
   * WatchProject constructor
   * @param name
   * @param eventEmitter
   * @param dependencies
   */
  public constructor (name: string, eventEmitter: EventEmitter2, dependencies?: WatchProject[]) {
    if (dependencies) {
      for (const dependency of dependencies) {
        this.dependencies.push(dependency)
        dependency.consumers.push(this)
      }
    } else {
      this._live = true
    }
    this.name = name
    this.eventEmitter = eventEmitter
  }

  public get state (): WatchState {
    return this._state
  }

  /**
   * A project is "reported" if and only if it has no buffered lines.
   */
  public get reported (): boolean {
    return this.bufferedLines.length === 0
  }

  /**
   * A project is "live" if and only if (the transitive closure of) its dependencies have `State.Succeeded`.
   */
  public get live (): boolean {
    return this._live
  }

  /**
   * Set state
   * @param state
   * @returns
   */
  public setState (state: WatchState): void {
    if (this._state === state) {
      return
    }
    if (this._state === WatchState.Succeeded) {
      // If we are leaving the Succeeded state, mark all the downstream consumers as dead
      if (this._live) {
        this._markDeadRecursive()
      }
    }
    this._state = state
    if (this.state === WatchState.Succeeded) {
      // If we just entered the Succeeded state, then mark the immediate consumers as live
      if (this._live) {
        this._markLiveRecursive()
      }
    }

    if (this.state === WatchState.Building) {
      // If we just started a new build, then discard any logs accumulated from the previous iteration
      this.bufferedLines.length = 0
    }
  }

  /**
   * Mark the consumer projects dead recursively
   */
  private _markDeadRecursive (): void {
    for (const consumer of this.consumers) {
      if (consumer._live) {
        consumer._live = false
        consumer._markDeadRecursive()
      }
    }
  }

  /**
   * Mark the consumer projects live recursively
   */
  private _markLiveRecursive (): void {
    for (const consumer of this.consumers) {
      consumer._live = true
      if (consumer._state === WatchState.Succeeded) {
        consumer._markLiveRecursive()
      }
    }
  }

  /**
   * Print any buffered lines. Also send the `build.done` event if the build is complete.
   */
  public printBufferedLines (): void {
    // we don't want to use this to print the buffer, if the output is from a compilation error
    if (this._state === WatchState.Failed) return
    let isDone = false
    // print only when we aren't pending (waiting) for further output from a failed state
    if (this._state !== WatchState.Pending && this.bufferedLines.length > 0) {
      for (const line of this.bufferedLines) {
        if (line !== '') {
          console.log(line) // allow console.log as we need raw logging
          // we need to set a flag to catch the initial SWC output
          if (!this._initialSWCBuildCompleted && line.includes('Watching for file changes')) {
            this.bufferedLines.length = 0
            this._initialSWCBuildCompleted = true
            isDone = true
          }
          if (this._initialSWCBuildCompleted && line.includes('Successfully compiled')) {
            this.bufferedLines.length = 0
            isDone = true
          }
        }
      }

      if (isDone) {
        this.bufferedLines.length = 0
        this.eventEmitter.emit('build.done', this) // and watching
        isDone = false
      }

      if (this._state === WatchState.Start) {
        this.setState(WatchState.Building)
      }

      this.bufferedLines.length = 0
    }
  }

  public printBufferedErrorLines (): void {
    if (this.bufferedLines.length > 0) {
      for (const line of this.bufferedLines) {
        console.log(line) // allow console.log as we need raw logging
      }

      this.bufferedLines.length = 0
      this.setState(WatchState.Pending)
    }
  }

  /**
   * Checks if the array includes a string
   * @param arr
   * @param str
   * @returns boolean
   */
  private _includesString (arr: string[], str: string): boolean {
    return arr.some((s) => s.includes(str))
  }
}
