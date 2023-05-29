import { CacheModule as Cache } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { CacheService } from './cache.service'
import { redisStore } from 'cache-manager-redis-yet'

@Module({
  imports: [
    Cache.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      db: 0,
      ttl: 60 * 30
    })
  ],
  providers: [CacheService],
  exports: [CacheService]
})
export class CacheModule {}
