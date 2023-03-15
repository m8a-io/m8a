import { DynamicModule } from "@nestjs/common";
import { TypegooseClass, TypegooseClassWithOptions } from "./typegoose-class.interface";
import { TypegooseConnectionOptions, TypegooseModuleAsyncOptions } from "./typegoose-options.interface";
export declare class TypegooseModule {
    static forRoot(uri: string, options?: TypegooseConnectionOptions): DynamicModule;
    static forRootAsync(options: TypegooseModuleAsyncOptions): DynamicModule;
    static forFeature(models: (TypegooseClass | TypegooseClassWithOptions)[], connectionName?: string): DynamicModule;
}
