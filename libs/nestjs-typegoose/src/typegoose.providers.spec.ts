import * as Typegoose from '@typegoose/typegoose'
import { prop, Ref, ReturnModelType, ModelOptions, Severity } from '@typegoose/typegoose'
import mongoose, { Connection } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { DEFAULT_DB_CONNECTION_NAME } from './typegoose.constants'
import { createTypegooseProviders, convertToTypegooseClassWithOptions } from './typegoose.providers'

const any = expect.any

let mongod: MongoMemoryServer

@ModelOptions({ options: { allowMixed: Severity.ALLOW } })
class MockUser {
  @prop()
  name: string
}

class MockSpecialUser extends MockUser {
  @prop()
  special: boolean
}

class MockExtraSpecialUser extends MockSpecialUser {
  @prop()
  otherUser: Ref<MockUser>
}

class MockTask {
  @prop()
  description: string
}

describe('createTypegooseProviders', () => {
  let connection: Connection

  beforeAll(async () => {
    jest.setTimeout(120000)

    mongod = await MongoMemoryServer.create()

    connection = await mongoose.createConnection(mongod.getUri(), {
      autoIndex: true
    })
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongod.stop()
  })

  describe('setModelForClass', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockSetModel: jest.SpyInstance<
        Typegoose.types.ReturnModelType<Typegoose.types.AnyParamConstructor<any>, unknown>,
        [cl: Typegoose.types.AnyParamConstructor<any>, options?: Typegoose.types.IModelOptions],
        any
      >,
      MockTypegooseClass1,
      mockConnection: any,
      schemaOptions: { collection: string },
      provider
    beforeEach(() => {
      mockSetModel = jest
        .spyOn(Typegoose, 'getModelForClass')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .mockImplementation(() => jest.fn() as ReturnModelType<any, any>)
      MockTypegooseClass1 = jest.fn()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockConnection = jest.fn() as any

      schemaOptions = {
        collection: 'newCollectionName'
      }

      const models = [
        {
          typegooseClass: MockTypegooseClass1,
          schemaOptions
        }
      ]

      ;[provider] = createTypegooseProviders(DEFAULT_DB_CONNECTION_NAME, models)
      provider.useFactory(mockConnection)
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should setup the database model', () => {
      expect(mockSetModel).toHaveBeenCalled()
    })

    it('should use existing connection from DbConnectionToken', () => {
      expect(mockSetModel.mock.calls[0][1]).toEqual(
        expect.objectContaining({
          existingConnection: mockConnection
        })
      )
    })

    it('should forward schema options to typegoose', () => {
      expect(mockSetModel.mock.calls[0][1]).toEqual(
        expect.objectContaining({
          schemaOptions
        })
      )
    })
  })

  it('should create typegoose providers from models', () => {
    jest.setTimeout(30000)

    const models = [
      {
        typegooseClass: MockUser
      },
      {
        typegooseClass: MockTask
      }
    ]

    const providers = createTypegooseProviders(DEFAULT_DB_CONNECTION_NAME, models)

    expect(providers).toEqual([
      {
        provide: 'MockUserModel',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useFactory: any(Function),
        inject: [DEFAULT_DB_CONNECTION_NAME]
      },
      {
        provide: 'MockTaskModel',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useFactory: any(Function),
        inject: [DEFAULT_DB_CONNECTION_NAME]
      }
    ])

    const userProvider = providers[0]

    const model = userProvider.useFactory(connection)

    expect(model.prototype.model).toBeTruthy()
  }, 15000)

  it('should create typegoose providers from models with discriminators', () => {
    jest.setTimeout(30000)

    const customDiscriminatorId = 'extra'
    const models = [
      {
        typegooseClass: MockUser,
        discriminators: [
          MockSpecialUser,
          {
            typegooseClass: MockExtraSpecialUser,
            discriminatorId: customDiscriminatorId
          }
        ]
      },
      {
        typegooseClass: MockTask
      }
    ]

    const providers = createTypegooseProviders(DEFAULT_DB_CONNECTION_NAME, models)

    expect(providers).toEqual([
      {
        provide: 'MockUserModel',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useFactory: any(Function),
        inject: [DEFAULT_DB_CONNECTION_NAME]
      },
      {
        provide: 'MockSpecialUserModel',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useFactory: any(Function),
        inject: [DEFAULT_DB_CONNECTION_NAME]
      },
      {
        provide: 'MockExtraSpecialUserModel',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useFactory: any(Function),
        inject: [DEFAULT_DB_CONNECTION_NAME]
      },
      {
        provide: 'MockTaskModel',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useFactory: any(Function),
        inject: [DEFAULT_DB_CONNECTION_NAME]
      }
    ])

    const specialProvider = providers[1]
    const specialModel = specialProvider.useFactory(connection)

    expect(specialModel.prototype.model).toBeTruthy()
    expect(specialModel).toHaveProperty('schema.discriminatorMapping.value', MockSpecialUser.name)

    const extraProvider = providers[2]
    const extraModel = extraProvider.useFactory(connection)

    expect(extraModel.prototype.model).toBeTruthy()
    expect(extraModel).toHaveProperty('schema.discriminatorMapping.value', customDiscriminatorId)

    const userProvider = providers[0]
    const userModel = userProvider.useFactory(connection)

    expect(userModel.prototype.model).toBeTruthy()
    expect(userModel.discriminators).toHaveProperty(MockSpecialUser.name, specialModel)
    expect(userModel.discriminators).toHaveProperty(MockExtraSpecialUser.name, extraModel)
  }, 15000)

  it('should create no providers if no models are given', () => {
    const providers = createTypegooseProviders(DEFAULT_DB_CONNECTION_NAME)

    expect(providers).toEqual([])
  })

  afterAll(() => {
    connection.close()
  })
})

describe('convertToTypegooseClassWithOptions', () => {
  class MockTypegooseClass {}
  class MockDiscriminator {}

  it('returns model as typegooseClass if it is just a class', () => {
    expect(convertToTypegooseClassWithOptions(MockTypegooseClass)).toEqual({
      typegooseClass: MockTypegooseClass
    })
  })
  it('returns model and schemaOptions if it is a TypegooseClassWithOptions', () => {
    const options = {
      collection: 'differentName'
    }

    const expected = {
      typegooseClass: MockTypegooseClass,
      schemaOptions: options
    }

    expect(convertToTypegooseClassWithOptions(expected)).toEqual(expected)
  })
  it('throws error is not a class or not a TypegooseClassWithOptions', () => {
    const handler = () => {
      convertToTypegooseClassWithOptions({
        something: 'different'
      } as never)
    }

    expect(handler).toThrowErrorMatchingSnapshot()
  })

  it('returns model with discriminators as typegooseClass if they are just a class', () => {
    const options = {
      typegooseClass: MockTypegooseClass,
      discriminators: [MockDiscriminator]
    }
    const expected = {
      typegooseClass: MockTypegooseClass,
      discriminators: [
        {
          typegooseClass: MockDiscriminator
        }
      ]
    }
    expect(convertToTypegooseClassWithOptions(options)).toEqual(expected)
  })
  it('returns model with discriminators with options if they are TypegooseDiscriminators', () => {
    const expected = {
      typegooseClass: MockTypegooseClass,
      discriminators: [
        {
          typegooseClass: MockDiscriminator,
          discriminatorId: 'test'
        }
      ]
    }
    expect(convertToTypegooseClassWithOptions(expected)).toEqual(expected)
  })
  it('throws error if a discriminator is not a class or TypegooseDiscriminator', () => {
    const handler = () => {
      convertToTypegooseClassWithOptions({
        typegooseClass: MockTypegooseClass,
        discriminators: [
          {
            something: 'different'
          }
        ]
      } as never)
    }

    expect(handler).toThrowErrorMatchingSnapshot()
  })
})
