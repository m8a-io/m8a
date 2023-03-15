import { plainToClass } from "class-transformer";
import { UserEntity } from "../../user.entity";

const user = {
  _id: "acacacacacacacacacac",
  email: "test@example.com",
  firstName: "John",
  lastName: "Doe",
  status: "Registered",
  username: "test@example.com",
  password: "blah",
};

export const userStub = (): UserEntity => plainToClass(UserEntity, user);
export const usersStub = (): [UserEntity] => [plainToClass(UserEntity, user)];
