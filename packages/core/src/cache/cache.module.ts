import type { RedisClientOptions } from 'redis'
import { CacheModule as Cache } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { CacheService } from './cache.service'
import { redisStore } from 'cache-manager-redis-yet'
import { envConfig } from '../config'

@Module({
  imports: [
    Cache.registerAsync<RedisClientOptions>({
      useFactory: async () => ({
        store: await redisStore({
          url: `redis://${envConfig.CACHE_USERNAME}:${envConfig.CACHE_PASSWORD}@${envConfig.CACHE_HOST}:${envConfig.CACHE_PORT}`
        })
      })
    })
  ],
  providers: [CacheService],
  exports: [CacheService]
})
export class CacheModule {}
