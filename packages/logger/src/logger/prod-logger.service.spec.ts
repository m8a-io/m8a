import { Test, TestingModule } from "@nestjs/testing";
import { ProdLoggerService } from "./prod-logger.service";

describe("LoggerService", () => {
  let service: ProdLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdLoggerService],
    }).compile();

    service = module.get<ProdLoggerService>(ProdLoggerService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
