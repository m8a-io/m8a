import { Command, CommandRunner } from "nest-commander";
import { DevLoggerService } from "@m8a/logger";
import { CheckForService } from "../utils/checkFor.service";
import { Injectable } from "@nestjs/common";

@Injectable()
@Command({ name: "test", description: "Checks for dev environment." })
export class TestCommand extends CommandRunner {
  constructor(
    private readonly logService: DevLoggerService,
    private readonly checkFor: CheckForService
  ) {
    super();
  }

  async run(passedParams: string[]): Promise<void> {
    this.logService.log(`Testing your development environment....`);
    if (
      this.checkFor.nodeJS() &&
      this.checkFor.docker() &&
      this.checkFor.packageManager()
    ) {
      this.logService.success("Your system is ready for the m8a platform!");
    } else {
      this.logService.error(
        "Your system needs some love to be able to develop with the m8a platform."
      );
    }
    process.exit(1);
  }
}
