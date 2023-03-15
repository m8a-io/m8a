import { usersStub } from "../test/stubs/user.stub";

export const UsersService = jest.fn().mockReturnValue({
  register: jest.fn().mockResolvedValue(usersStub()),
});
