import { Type } from '@nestjs/common'
import { ModuleMetadata } from '@nestjs/common/interfaces'
import { ConnectOptions } from 'mongoose'

export interface TypegooseConnectionOptions extends ConnectOptions {
  connectionName?: string;
}

export interface TypegooseModuleOptions {
  uri: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface TypegooseOptionsFactory {
  createTypegooseOptions ():
    | Promise<TypegooseModuleOptions>
    | TypegooseModuleOptions;
}

export interface TypegooseModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  connectionName?: string;
  useExisting?: Type<TypegooseOptionsFactory>;
  useClass?: Type<TypegooseOptionsFactory>;
  useFactory?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) => Promise<TypegooseModuleOptions> | TypegooseModuleOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inject?: any[];
}
