/* eslint-disable jest/no-commented-out-tests */
// import { Test, TestingModule } from '@nestjs/testing'
// import { INestApplication } from '@nestjs/common'
// // import { createMercuriusTestClient } from 'mercurius-integration-testing'
// // import { UserResolver } from '../../src/user/user.resolver'
// import { UserService } from '../../src/user/user.service'
// // import { AppModule } from 'tests/test-app/app.module'

// describe('UserResolver', () => {
//   let app: INestApplication

//   const mockedUserService = {
//     me: jest.fn(),
//     helloWorld: jest.fn(),
//     findById: jest.fn()
//   }

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//       providers: [
//         {
//           provide: UserService,
//           useValue: mockedUserService
//         }
//       ]
//     }).compile()

//     app = module.createNestApplication()
//     await app.init()
//     const fastifyInstance = app.getHttpAdapter().getInstance()
//     // let gqlClient = createMercuriusTestClient(fastifyInstance)
//     // const userService = module.get(UserService)
//   })

//   afterEach(async () => {
//     await app.close()
//   })
// TODO: finish the tests
// eslint-disable-next-line jest/no-commented-out-tests
// it('should call the me method for the active user\'s information', () => {

// })
// })
