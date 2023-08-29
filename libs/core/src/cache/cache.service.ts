import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'

@Injectable()
export class CacheService {
  constructor (@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  private ttl = 0

  async get (type: string, key: string): Promise<unknown | null> {
    const cacheKey = this.getKey(type, key)
    try {
      const value = await this.cache.get(cacheKey)
      if (!value) {
        return null
      }
      return value
    } catch (e) {
      console.log('Oops. Getting something from the cache failed.', e)
      throw e
    }
  }

  async set (type: string, key: string, value, ttl: number = this.ttl): Promise<void> {
    const cacheKey = this.getKey(type, key)
    try {
      await this.cache.set(cacheKey, value, ttl)
    } catch (e) {
      console.log('Oops. Setting something to the cache failed.', e)
      throw e
    }
  }

  async revoke (type: string, key: string): Promise<void> {
    const cacheKey = this.getKey(type, key)
    await this.cache.del(cacheKey)
  }

  private getKey (type: string, initialKey: string): string {
    return `zeus.m8a.io:${type}:${initialKey}`
  }

  // async resetCache (): Promise<void> {
  //   if (this.cache.store.keys && this.cache.store.del) {
  //     const keys = await this.cache.store.keys()
  //     await this.cache.store.del(keys)
  //   }
  // }
}
