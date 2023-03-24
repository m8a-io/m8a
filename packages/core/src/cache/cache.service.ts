import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'

@Injectable()
export class CacheService {
  constructor (@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  private ttl = 60 * 30

  async get (type: string, key: string): Promise<unknown | null> {
    const cacheKey = this.getKey(type, key)
    try {
      const value = await this.cache.get(cacheKey)
      if (!value) {
        return null
      }
      return value
    } catch (e) {
      console.log('Oops')
      throw e
    }
  }

  async set (type: string, key: string, value, ttl: number = this.ttl): Promise<void> {
    const cacheKey = this.getKey(type, key)
    try {
      await this.cache.set(cacheKey, value, ttl)
    } catch (e) {
      console.log('Oops')
      throw e
    }
  }

  async revoke (type: string, key: string): Promise<void> {
    const cacheKey = this.getKey(type, key)
    await this.cache.del(cacheKey)
  }

  private getKey (type: string, initialKey: string): string {
    return `${type}:${initialKey}`
  }

  // async resetCache (): Promise<void> {
  //   if (this.cache.store.keys && this.cache.store.del) {
  //     const keys = await this.cache.store.keys()
  //     await this.cache.store.del(keys)
  //   }
  // }
}
