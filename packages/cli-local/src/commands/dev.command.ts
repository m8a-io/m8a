import { Command, CommandRunner } from "nest-commander";
import { CheckForService } from "@m8a/cli-lib";
import { DevLoggerService } from "@m8a/logger";
import { RunnerService } from "@m8a/cli-lib";

@Command({
  name: "dev",
  description: `The "dev" command will start a local development server for the package you are currently in.`,
})
export class DevCommand implements CommandRunner {
  constructor(
    private readonly logService: DevLoggerService,
    private readonly runnerService: RunnerService,
    private readonly checkFor: CheckForService
  ) {}

  async run(passedParams: string[]): Promise<void> {
    this.runDev();
  }

  private runDev(): void {
    this.logService.addLine();
    this.logService.log("Starting your dev environment....");
    this.runnerService.spawnSync("pnpm", ["start:dev"]);
  }
}
