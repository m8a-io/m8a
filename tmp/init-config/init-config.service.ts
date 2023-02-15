import { Injectable } from '@nestjs/common'
import { DbConfigService, EnvironmentVariables } from '@m8a/core'
import { DevLoggerService } from '@m8a/logger'

@Injectable()
export class InitConfigService {
  constructor (
    private readonly logService: DevLoggerService,
    private readonly dbConfigService: DbConfigService,
    private readonly envConfigService: EnvironmentVariables
  ) { }

  async createInitialConfig (): Promise<boolean> {
    const tempData = await this.dbConfigService.getConfig()

    if (tempData.length > 0) {
      this.logService.warn("Oops! The database isn't empty. Aborting...")
      this.logService.log(`If you need to reset the ${this.envConfigService.DB_NAME} database, add the '-r, --reset' argument.`)
      process.exit(1)
    }

    await this.dbConfigService.setConfig({
      foo: 'bar'
    })

    this.logService.log('Initial config installed.')
    return true
  }
}
