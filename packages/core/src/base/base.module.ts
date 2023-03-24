import { Module } from '@nestjs/common'
import { BaseService } from './base.service'

@Module({
  imports: [],
  providers: [BaseService],
  exports: [BaseService]
})
export class BaseModule {}
