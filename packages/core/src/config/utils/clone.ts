import v8 from 'v8'

export const clone = (obj: unknown) => {
  return v8.deserialize(v8.serialize(obj));
}

