import { prop } from '@typegoose/typegoose'
import * as nest from '@nestjs/common'
import { InjectModel, InjectConnection } from './typegoose.decorators'
import { DEFAULT_DB_CONNECTION_NAME } from './typegoose.constants'

jest.mock('@nestjs/common', () => ({
  Inject: jest.fn()
}))

class MockUser {
  @prop()
  name: string
}

describe('InjectModel', () => {
  it('should inject the model', () => {
    InjectModel(MockUser)

    expect(nest.Inject).toHaveBeenCalledWith('MockUserModel')
  })
})

describe('InjectConnection', () => {
  it('should inject the connection', () => {
    InjectConnection()

    expect(nest.Inject).toHaveBeenCalledWith(DEFAULT_DB_CONNECTION_NAME)
  })
})
