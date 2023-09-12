import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { WatchManager, WatchProject } from '.'

@Injectable()
export class WatchListeners {
  constructor (private readonly watchManager: WatchManager) {}

  /**
   *  fired when dependency project builds are done
   */
  @OnEvent('build.done')
  handleBuildDoneEvent (builtProject: WatchProject) {
    this.watchManager.markSucceeded(builtProject)
  }

  /**
   * fired when the runner service emits data to be written to the console
   */
  @OnEvent('write.buildLines')
  handleWriteBuildLinesEvent (payload) {
    this.watchManager.writeBuildLines(payload)
  }

  /**
   * fired when a dependency project is building again i.e. changes were made
   */
  @OnEvent('devServer.kill')
  handleDevServerKillEvent () {
    this.watchManager.killDevServerApp()
  }
}
