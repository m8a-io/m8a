import { Module } from '@nestjs/common'
import { DevLoggerService } from './dev-logger.service'
import { ProdLoggerConfig } from './prod-logger.config'
import { ProdLoggerService } from './prod-logger.service'

@Module({
  providers: [DevLoggerService, ProdLoggerService, ProdLoggerConfig],
  exports: [DevLoggerService, ProdLoggerService]
})
export class LoggerModule { }
