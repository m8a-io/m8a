import { Module, CacheModule as Cache, CacheStore } from '@nestjs/common'
import { CacheService } from './cache.service'
import { redisStore } from 'cache-manager-redis-store'

@Module({
  imports: [
    Cache.register({
      // TODO: needs fix from https://github.com/dabroek/node-cache-manager-redis-store/pull/54
      store: redisStore as unknown as CacheStore,
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
