import { Module } from '@nestjs/common'
// import { ConfigModule, TypegooseModule, DbConfigModule } from '@m8a/core'
import { LoggerModule } from '@m8a/logger'
import { UpCommand } from './up.command'
import { DownCommand } from './down.command'
import { DevCommand } from './dev.command'
// import { InitCommand, InitQuestions } from './init.command'
// import { CliUserModule } from '../cli-user/cli-user.module'
// import { InitConfigModule } from '../init-config/init-config.module'
import { CliLibModule } from '../utils/cli-lib.module'

@Module({
  imports: [LoggerModule, CliLibModule],
  providers: [UpCommand, DownCommand, DevCommand],
  exports: []
})
export class CommandsLocalModule { }
