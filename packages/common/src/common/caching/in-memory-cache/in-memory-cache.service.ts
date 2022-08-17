import {
  Injectable, Inject, CACHE_MANAGER,
} from '@nestjs/common';
import { isNil } from '@nestjs/common/utils/shared.utils';
import { Cache } from 'cache-manager';

@Injectable()
export class InMemoryCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) { }

  get<T>(
    key: string,
  ): Promise<T | undefined> {
    return this.cache.get<T>(key);
  }

  getMany<T>(
    keys: string[],
  ): Promise<(T | undefined)[]> {
    return Promise.all(
      keys.map(key => this.get<T>(key)),
    );
  }

  async set<T>(
    key: string,
    value: T,
    ttl: number,
  ): Promise<void> {
    if (isNil(value)) {
      return;
    }

    await this.cache.set<T>(key, value, {
      ttl,
    });
  }

  async setMany<T>(
    keys: string[],
    values: T[],
    ttl: number,
  ): Promise<void> {
    for (const [index, key] of keys.entries()) {
      await this.set(key, values[index], ttl);
    }
  }

  async delete(
    key: string,
  ): Promise<void> {
    await this.cache.del(key);
  }

  async getOrSet<T>(
    key: string,
    createValueFunc: () => Promise<T | null | undefined>,
    ttl: number,
  ): Promise<T | null | undefined> {
    const cachedData = await this.get<T>(key);
    if (!isNil(cachedData)) {
      return cachedData;
    }

    const internalCreateValueFunc = this.buildInternalCreateValueFunc<T>(createValueFunc);
    const value = await internalCreateValueFunc();
    if (value != null) {
      await this.set<T>(key, value, ttl);
    }
    return value;
  }

  async setOrUpdate<T>(
    key: string,
    createValueFunc: () => Promise<T | null | undefined>,
    ttl: number,
  ): Promise<T | null | undefined> {
    const internalCreateValueFunc = this.buildInternalCreateValueFunc(createValueFunc);
    const value = await internalCreateValueFunc();
    if (value != null) {
      await this.set<T>(key, value, ttl);
    }
    return value;
  }

  private buildInternalCreateValueFunc<T>(
    createValueFunc: () => Promise<T | null | undefined>,
  ): () => Promise<T | null | undefined> {
    return () => {
      return createValueFunc();
    };
  }
}