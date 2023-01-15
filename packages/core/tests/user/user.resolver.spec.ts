import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { createMercuriusTestClient } from 'mercurius-integration-testing'
import { UserResolver } from '../../src/user/user.resolver'
import { UserService } from '../../src/user/user.service'
import { AppModule } from 'tests/test-app/app.module'

describe('UserResolver', () => {
  let userService: jest.Mocked<UserService>
  let app: INestApplication;
  let gqlClient

  const mockedUserService = {
    me: jest.fn(),
    helloWorld: jest.fn(),
    findById: jest.fn()
  }

  beforeEach( async() => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: UserService,
          useValue: mockedUserService,
        }
      ]
    }).compile()
    
    app = module.createNestApplication();
    await app.init();
    const fastifyInstance = app.getHttpAdapter().getInstance()
    gqlClient = createMercuriusTestClient(fastifyInstance);
    
    userService = module.get(UserService)
  })

  afterEach(async () => {
    await app.close();
  });
    
  it('should call the me method for the active user\'s information', () => {
    
  })

})