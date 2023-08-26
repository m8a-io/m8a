import { Inject } from "@nestjs/common";
import { TypegooseClass } from "./typegoose-class.interface";
import { getModelToken, getConnectionToken } from "./typegoose.utils";

/**
 * Used to return the inject the mongoose model.
 * @param model - the model class wanted to be injected
 * @returns the annotation for injecting model
 * @internal
 */
export const InjectModel = (model: TypegooseClass) =>
  Inject(getModelToken(model.name));

export const InjectConnection = (name?: string) =>
  Inject(getConnectionToken(name));