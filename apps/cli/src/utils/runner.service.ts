import { Injectable } from '@nestjs/common'
import * as spawn from 'cross-spawn'
import { DevLoggerService } from '@m8a/logger'
import execa from 'execa'
import { Transform } from 'stream'
import { EventEmitter } from 'events'
import { WatchManager, WatchProject, WatchState } from './watch'

@Injectable()
export class RunnerService {
  constructor (private readonly logService: DevLoggerService, private readonly watchManager: WatchManager) {}

  public spawnSync (cmd: string, params: any[], project?: { projectFolder: string }) {
    const runner = spawn.sync(cmd, params, { stdio: 'inherit', cwd: project.projectFolder })

    if (runner.status || runner.error) {
      this.logService.error(`Command "${cmd}" failed with exit code: ${runner.status}`)
      process.exit(1)
    }
  }

  public getSpawnOutput (command: string, params: string[]) {
    try {
      const child = spawn.sync(command, params)
      if (child.status === 0) return child.output
    } catch (err) {
      return 'Not available'
    }
  }

  public async spawnDevCommandAsync (
    cmd: string,
    params: any[],
    project: { projectFolder: string; packageName: string },
    watchProject: WatchProject
  ) {
    const runner = spawn(cmd, params, { cwd: project.projectFolder, stdio: 'inherit' })

    runner.on('error', (error) => {
      this.logService.error(`Command "${cmd}" failed with error: ${error}`)
      runner.removeAllListeners()
      process.exit(1)
    })

    runner.on('data', (data) => {
      watchProject.setState(WatchState.Building)
      this.watchManager.writeBuildLines(watchProject, data)
      if (data.includes('Watching for file changes.')) {
        watchProject.setState(WatchState.Succeeded)
      }
    })

    // const { emitter, transform } = this.transformer(project.packageName, this.logService)

    // runner.stderr.pipe(transform)
    // runner.stdout.pipe(transform)
    // transform.pipe(process.stdout)

    // // eslint-disable-next-line no-async-promise-executor
    // return new Promise(async (resolve) => {
    //   emitter.once('initial-build-done', resolve)
    //   runner
    // })
  }

  // private transformer (prefix: string, logger: DevLoggerService) {
  //   const emitter = new EventEmitter()
  //   const transform = new Transform({
  //     transform (chunk, enc, cb) {
  //       chunk = chunk.toString()
  //       if (
  //         // TSC watcher
  //         chunk.includes('Watching for file changes') ||
  //         // Webpack finished
  //         chunk.includes('Built at:') ||
  //         // API
  //         chunk.includes('[nodemon]')
  //       ) {
  //         emitter.emit('initial-build-done')
  //       }

  //       const lines = chunk
  //         .split('\n')
  //         .map((line) => logger.logPlain(`${prefix}: ${line}`))
  //       //  .join('\n')
  //       // if (!lines.endsWith('\n')) {
  //       //   lines += '\n'
  //       // }
  //       cb(null, lines)
  //     },
  //     flush (cb) {
  //       emitter.emit('initial-build-done')
  //       cb()
  //     }
  //   })
  //   return { emitter, transform }
  // }
}
