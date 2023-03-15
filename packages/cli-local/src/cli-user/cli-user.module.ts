import { Module } from "@nestjs/common";
import { CliUserService } from "./cli-user.service";
import { UserModule } from "@m8a/core";
import { LoggerModule } from "@m8a/logger";
import { CliLibModule } from "@m8a/cli-lib";

@Module({
  imports: [UserModule, LoggerModule, CliLibModule],
  providers: [CliUserService],
  exports: [CliUserService],
})
export class CliUserModule {}
