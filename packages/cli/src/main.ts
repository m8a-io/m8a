#!/usr/bin/env node

import { CommandFactory } from 'nest-commander'
import { AppModule } from './app.module'

async function bootstrap () {
  await CommandFactory.run(AppModule, {
    logger: ['error', 'warn'],
    usePlugins: true,
    cliName: 'm8a-cli'
  })
}

bootstrap()
