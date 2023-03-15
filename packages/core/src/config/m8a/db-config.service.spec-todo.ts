// TODO: db-config.service add proper tests for this

import { Test, TestingModule } from "@nestjs/testing";
import { DbConfigService } from "./db-config.service";

describe("ConfigService", () => {
  let service: DbConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbConfigService],
    }).compile();

    service = module.get<DbConfigService>(DbConfigService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
