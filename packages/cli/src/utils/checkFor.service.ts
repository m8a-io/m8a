import { Injectable } from '@nestjs/common'
import { DevLoggerService } from '@m8a/logger'
import { RunnerService } from './runner.service'

@Injectable()
export class CheckForService {
  constructor (private readonly logService: DevLoggerService, private readonly runnerService: RunnerService) {}

  public docker (): boolean {
    this.logService.log('Checking for your Docker environment....')
    const runnerDocker = this.runnerService.getSpawnOutput('docker', [
      'version',
      '--format',
      "'{{.Server.Version}}'"
    ])
    const runnerDockerCompose = this.runnerService.getSpawnOutput('docker compose', ['--version'])

    if (runnerDocker && runnerDockerCompose) {
      const dockerVersion = runnerDocker[1]
        .toString()
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/'/g, '')
      this.logService.success(`You have Docker available: version ${dockerVersion}`)
      this.logService.addLine()
      return true
    } else {
      this.logService.warn('Docker or Docker-Compose are not available.')
      this.logService.addLine()
      return false
    }
  }

  public nerdctl (): boolean {
    this.logService.log('Checking for your Rancher environment....')
    const runnerNerdctl = this.runnerService.getSpawnOutput('nerdctl', ['--version'])

    if (runnerNerdctl) {
      const nerdctlVersion = runnerNerdctl[1]
        .toString()
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/'/g, '')
      this.logService.success(`You have nerdctl available: ${nerdctlVersion}`)
      this.logService.addLine()
      return true
    } else {
      this.logService.warn('nerdctl is not available.')
      this.logService.addLine()
      return false
    }
  }

  public nodeJS (): boolean {
    this.logService.log('Checking your Node environment....')
    const runner = this.runnerService.getSpawnOutput('node', ['-v'])
    const nodeVersion = runner[1]
      .toString()
      .replace(',', '')
      .replace('v', '')
      .replace(/(\r\n|\n|\r)/gm, '')
    const nodeMajorVersion = parseInt(nodeVersion.split('.')[0], 10)
    if (nodeMajorVersion >= 12) {
      this.logService.success(`Your Node is good to go: version ${nodeVersion}`)
      this.logService.addLine()
      return true
    } else {
      this.logService.error('Node version is not compatible.')
      return false
    }
  }

  public packageManager (): boolean {
    this.logService.log('Checking for your Package Managers....')
    this.logService.log('Checking for NPM....')
    const runnerNPM = this.runnerService.getSpawnOutput('npm', ['-v'])
    const npmVersion = runnerNPM[1].toString().replace(/(\r\n|\n|\r)/gm, '')
    const npmMajorVersion = parseInt(npmVersion.split('.')[0], 10)
    if (runnerNPM) {
      this.logService.log('NPM version available: ', npmVersion)
    } else {
      this.logService.warn('NPM is not available.')
    }

    this.logService.log('Checking for Yarn....')
    const runnerYarn = this.runnerService.getSpawnOutput('yarn', ['-v'])
    const yarnVersion = runnerYarn[1].toString().replace(/(\r\n|\n|\r)/gm, '')
    const yarnMajorVersion = parseInt(yarnVersion.split('.')[0], 10)
    if (runnerYarn) {
      this.logService.log('Yarn version available: ', yarnVersion)
    } else {
      this.logService.warn('Yarn is not available.')
    }

    let pnpmVersion = ''
    this.logService.log('Checking for PNPM....')
    const runnerPNPM = this.runnerService.getSpawnOutput('pnpm', ['-v'])
    if (!runnerPNPM) {
      this.logService.warn('PNPM is not available.')
    } else {
      pnpmVersion = runnerPNPM[1].toString().replace(/(\r\n|\n|\r)/gm, '')
      this.logService.log('PNPM  version available: ', pnpmVersion)
    }
    const pnpmMajorVersion = parseInt(pnpmVersion.split('.')[0], 10)
    if (npmMajorVersion >= 6 || yarnMajorVersion === 1 || pnpmMajorVersion >= 5) {
      this.logService.success('Your available package manager(s) is/are good to go.')
      this.logService.addLine()
      return true
    } else {
      this.logService.error('Your package management either needs updating or is missing.')
      this.logService.addLine()
      return false
    }
  }
}
