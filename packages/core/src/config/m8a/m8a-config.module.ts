import { Global, Module } from '@nestjs/common'
import { DbConfigEntity } from './entities/config.entity'
import { DbConfigService } from './db-config.service'
import { DbConfigModule } from './db-config.module'

@Global()
@Module({
  imports: [DbConfigModule],
  providers: [
    {
      provide: DbConfigEntity,
      useFactory: async (dbConfigService: DbConfigService) => {
        return await dbConfigService.getConfig()
      },
      inject: [DbConfigService]
    }
  ],
  exports: [DbConfigEntity]
})
export class M8aConfigModule {}
