import { Transform } from "class-transformer";
import { clone } from "./clone";

export function Default(defaultValue: unknown): PropertyDecorator {
  return Transform((value: unknown) => value ?? clone(defaultValue));
}
