import { CacheModule } from '../../cache'
import { JwtModule } from '../auth.module'
import { Module } from '@nestjs/common'
import { RefreshController } from './refresh.controller'
import { RefreshService } from './refresh.service'

@Module({
  imports: [CacheModule, JwtModule],
  providers: [RefreshService, RefreshController],
  controllers: [RefreshController],
  exports: [RefreshService]
})
export class RefreshModule {}
