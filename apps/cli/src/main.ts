#!/usr/bin/env node

import { CommandFactory } from 'nest-commander'
import { AppModule } from './app.module'

async function bootstrap () {
  await CommandFactory.runWithoutClosing(AppModule, {
    logger: ['error', 'warn', 'verbose', 'debug']
  })
}

bootstrap()
