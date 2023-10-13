// TODO: m8a-auth.service add proper tests for this

import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from '../auth.service'

describe('RefreshService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService]
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
