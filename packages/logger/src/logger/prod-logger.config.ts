import { FastifyParser } from '@ogma/platform-fastify'
import { Injectable } from '@nestjs/common'
import { ModuleConfigFactory } from '@golevelup/nestjs-modules'
import { OgmaModuleOptions } from '@ogma/nestjs-module'

@Injectable()
export class OgmaModuleConfig implements ModuleConfigFactory<OgmaModuleOptions> {
  // constructor (/* private readonly configService: ConfigService */) {}

  createModuleConfig (): OgmaModuleOptions {
    return {
      service: {
        logLevel: 'FINE' /* this.configService.getLogLevel() */,
        color: true,
        application: 'm8a'
        // application: this.configService.getAppName()
      },
      interceptor: {
        http: FastifyParser
      }
    }
  }
}
