import { Test, TestingModule } from '@nestjs/testing'
import { TypegooseService } from './typegoose.service'

describe('TypegooseService', () => {
  let service: TypegooseService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypegooseService]
    }).compile()

    service = module.get<TypegooseService>(TypegooseService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
