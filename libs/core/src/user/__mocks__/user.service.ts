import { usersStub } from '../__stubs__/user.stub'

export const UsersService = jest.fn().mockReturnValue({
  register: jest.fn().mockResolvedValue(usersStub())
})
