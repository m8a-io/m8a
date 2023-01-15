import { DynamicModule, OnApplicationShutdown } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { TypegooseModuleAsyncOptions, TypegooseConnectionOptions } from './typegoose-options.interface';
export declare class TypegooseCoreModule implements OnApplicationShutdown {
    private readonly connectionName;
    private readonly moduleRef;
    constructor(connectionName: string, moduleRef: ModuleRef);
    static forRoot(uri: string, options?: TypegooseConnectionOptions): DynamicModule;
    static forRootAsync(options: TypegooseModuleAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
    onApplicationShutdown(): Promise<void>;
}
