import * as spawn from 'cross-spawn'
import { WatchProject } from './watch'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { spawn as spawn2 } from 'child_process'
import { Injectable } from '@nestjs/common'
import { DevLoggerService } from '@m8a/logger'

@Injectable()
export class RunnerService {
  constructor (private readonly logService: DevLoggerService, private eventEmitter: EventEmitter2) {}

  public spawnSync (cmd: string, params: any[], project?: { projectFolder: string }) {
    const runner = spawn.sync(cmd, params, { stdio: 'inherit', cwd: project.projectFolder })

    if (runner.status || runner.error) {
      this.logService.error(`Command "${cmd}" failed with exit code: ${runner.status}`)
      process.exit(1)
    }
    return runner
  }

  public getSpawnOutput (command: string, params: string[]) {
    try {
      const child = spawn.sync(command, params)
      if (child.status === 0) return child.output
    } catch (err) {
      return 'Not available'
    }
  }

  public spawnDevCommand (
    cmd: string,
    params: any[],
    project: { projectFolder: string; packageName: string },
    watchProject: WatchProject
  ) {
    const runner = spawn(cmd, params, { cwd: project.projectFolder })

    runner.on('error', (error) => {
      this.logService.error(`Command "${cmd}" failed with error: ${error}`)
      runner.removeAllListeners()
      process.exit(1)
    })

    runner.stdout.on('data', (data) => {
      this.eventEmitter.emit('write.buildLines', { project: watchProject, payload: data })
    })
  }

  public spawnDevAppCommand (
    cmd: string,
    params: any[],
    project: { projectFolder: string; packageName: string }
  ) {
    // console.log('spawning app command')
    const runner = spawn2(cmd, params, { cwd: project.projectFolder, stdio: 'inherit' })
    // console.log('spawned command')
    runner.on('error', (error) => {
      this.logService.error(`Command "${cmd}" failed with error: ${error}`)
      runner.removeAllListeners()
      process.exit(1)
    })

    return runner
  }
}
