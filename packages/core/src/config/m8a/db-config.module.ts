import { Global, Module } from '@nestjs/common'
import { DbConfigEntity } from './entities/config.entity'
import { DbConfigService } from './db-config.service'
import { TypegooseModule } from '@m8a/nestjs-typegoose'

@Global()
@Module({
  imports: [TypegooseModule.forFeature([DbConfigEntity])],
  providers: [DbConfigService],
  exports: [DbConfigService]
})
export class DbConfigModule {}
