import { Test, TestingModule } from '@nestjs/testing'
import { InitConfigService } from './init-config.service'

describe('CliUserService', () => {
  let service: InitConfigService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitConfigService]
    }).compile()

    service = module.get<InitConfigService>(InitConfigService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
