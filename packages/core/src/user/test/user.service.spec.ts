import { Test, TestingModule } from '@nestjs/testing'
import { getQueryServiceToken, QueryService } from '@ptc-org/nestjs-query-core'
import { UserAssembler, UserService } from '../user.service'
import { UserEntity } from '../user.entity'
import { HashService } from '../hash.service'

describe('UserService', () => {
  let userService: UserService
  let userEntityQueryService: jest.Mocked<QueryService<UserEntity>>

  const mockedUserEntityQueryService = {
    query: jest.fn(),
    createOne: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getQueryServiceToken(UserEntity),
          useValue: mockedUserEntityQueryService
        },
        UserAssembler,
        HashService
      ]
    }).compile()

    userService = module.get<UserService>(UserService)
    userEntityQueryService = module.get(getQueryServiceToken(UserEntity))
  })

  afterEach(() => jest.clearAllMocks())

  it('should be defined', () => {
    console.log('userService ', userService.queryService.query)
    expect(userService).toBeDefined()
  })

  describe('register', () => {
    let querySpy: jest.SpyInstance

    const RegisterInputDTO = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@test.com',
      password: 'blah'
    }

    const SystemUserEntity = [{
      _id: 'tempIdForTesting',
      email: 'admin@m8a.io.admin'
    }]

    const systemUserSearchFilter = {
      filter: {
        username: { eq: 'admin@m8a.io.admin' }
      }
    }

    it('should find the system user', async () => {
      querySpy = jest.spyOn(userEntityQueryService, 'query')
      querySpy.mockResolvedValueOnce(SystemUserEntity)

      await userService.register(RegisterInputDTO)
      expect(querySpy).toHaveBeenCalledWith(systemUserSearchFilter)
    })

    it('should fail if the system user is missing', async () => {
      querySpy = jest.spyOn(userEntityQueryService, 'query').mockResolvedValueOnce([])

      await expect(userService.register(RegisterInputDTO)).rejects.toThrow('There was a problem with locating the system user for the registration process. Please see your admin for help.')
    })
  })
})
