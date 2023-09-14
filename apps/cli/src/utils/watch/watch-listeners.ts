import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { WatchManager, WatchProject } from '.'

@Injectable()
export class WatchListeners {
  constructor (private readonly watchManager: WatchManager) {}

  /**
   *  fired when dependency project build is done
   */
  @OnEvent('build.done')
  handleBuildDoneEvent (builtProject: WatchProject) {
    this.watchManager.markSucceeded(builtProject)
  }

  /**
   *  fired when dependency project build fails
   */
  @OnEvent('build.failed')
  handleBuildFailedEvent (builtProject: WatchProject) {
    this.watchManager.markFailed(builtProject)
  }

  /**
   * fired when the runner service emits data to be written to the console
   */
  @OnEvent('write.buildLines')
  handleWriteBuildLinesEvent (payload) {
    this.watchManager.writeBuildLines(payload)
  }

  /**
   * fired when the runner service emits data to be written to the console
   */
  @OnEvent('write.errorLines')
  handleWriteErrorLinesEvent (payload) {
    this.watchManager.writeErrorLines(payload)
  }

  /**
   * fired when a dependency project is building again i.e. changes were made
   */
  @OnEvent('devServer.kill')
  handleDevServerKillEvent () {
    this.watchManager.killDevServerApp()
  }
}
