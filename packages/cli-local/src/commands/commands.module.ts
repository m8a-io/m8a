import { Module } from "@nestjs/common";
import { ConfigModule, TypegooseModule, DbConfigModule } from "@m8a/core";
import { LoggerModule } from "@m8a/logger";
import { CliLibModule } from "@m8a/cli-lib";
import { UpCommand } from "./up.command";
import { DownCommand } from "./down.command";
import { DevCommand } from "./dev.command";
import { InitCommand, InitQuestions } from "./init.command";
import { CliUserModule } from "../cli-user/cli-user.module";
import { InitConfigModule } from "../init-config/init-config.module";

@Module({
  imports: [
    ConfigModule,
    TypegooseModule,
    DbConfigModule,
    CliLibModule,
    LoggerModule,
    CliUserModule,
    InitConfigModule,
  ],
  providers: [UpCommand, DownCommand, InitCommand, InitQuestions, DevCommand],
  exports: [],
})
export class CommandsModule {}
