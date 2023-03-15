import { Module } from "@nestjs/common";
import { RunnerService } from "./runner.service";
import { CheckForService } from "./checkFor.service";
import { LoggerModule } from "@m8a/logger";

@Module({
  imports: [LoggerModule],
  providers: [RunnerService, CheckForService],
  exports: [CheckForService, RunnerService],
})
export class UtilsModule {}
