import { NestFactory } from '@nestjs/core'
import { DevLoggerService } from '@m8a/logger'
import { ValidationPipe } from '@nestjs/common'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { EnvironmentVariables } from '@m8a/core'
import { OgmaService } from '@ogma/nestjs-module'
import fastifyCookie from '@fastify/cookie'

async function bootstrap () {
  let logger: DevLoggerService | OgmaService
  logger = new DevLoggerService('starter-kit', {
    timestamp: true,
    logLevels: ['debug', 'warn', 'error', 'verbose']
  })

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger,
      bufferLogs: false,
      abortOnError: true
    }
  )

  await app.register(fastifyCookie, {
    secret: 'my-secret' // TODO: update for better cookie signature
  })
  const config = app.get(EnvironmentVariables)

  if (config.NODE_ENV !== 'development') {
    // we are in anything other than development
    logger = app.get<OgmaService>(OgmaService)
    app.useLogger(logger)
  }

  const globalPrefix = config.GQL_PATH

  app.enableCors({
    credentials: true,
    origin: 'http://localhost:9000'
  })

  app.useGlobalPipes(new ValidationPipe())

  const port = config.PORT || 3000
  await app.listen(port, () => {
    if (logger instanceof DevLoggerService) {
      logger.success(
        `Server listening at http://localhost:${port}/${globalPrefix}`
      )
      logger.success(`Running in ${config.NODE_ENV} mode`)
      logger.success('The database in use is: ' + config.DB_NAME)
    } else {
      logger.log(
        `Server listening at http://localhost:${port}/${globalPrefix}`
      )
    }
  })
}

bootstrap()
