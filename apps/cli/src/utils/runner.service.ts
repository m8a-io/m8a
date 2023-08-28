import { Injectable } from '@nestjs/common'
import * as spawn from 'cross-spawn'
import { DevLoggerService } from '@m8a/logger'

@Injectable()
export class RunnerService {
  constructor (private readonly logService: DevLoggerService) {}

  public spawnSync (cmd: string, params: any[]) {
    const runner = spawn.sync(cmd, params, { stdio: 'inherit' })

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
}
