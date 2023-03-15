import { Module } from "@nestjs/common";
import { DevLoggerService } from "./dev-logger.service";
import { ProdLoggerService } from "./prod-logger.service";

@Module({
  providers: [DevLoggerService, ProdLoggerService],
  exports: [DevLoggerService, ProdLoggerService],
})
export class LoggerModule {}
