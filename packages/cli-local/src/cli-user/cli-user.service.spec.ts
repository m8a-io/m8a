import { Test, TestingModule } from '@nestjs/testing'
import { CliUserService } from './cli-user.service'

describe('CliUserService', () => {
  let service: CliUserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliUserService]
    }).compile()

    service = module.get<CliUserService>(CliUserService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
