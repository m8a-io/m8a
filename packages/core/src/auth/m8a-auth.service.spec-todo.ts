// TODO: m8a-auth.service add proper tests for this

import { Test, TestingModule } from '@nestjs/testing'
import { M8aAuthService } from './m8a-auth.service'

describe('RefreshService', () => {
  let service: M8aAuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [M8aAuthService]
    }).compile()

    service = module.get<M8aAuthService>(M8aAuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
