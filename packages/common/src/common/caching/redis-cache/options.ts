import { ModuleMetadata } from '@nestjs/common';
import { ConnectionOptions } from 'tls';

export class RedisCacheModuleOptions {
  config: {
    host?: string | undefined;
    port?: number | undefined;
    username?: string | undefined;
    password?: string | undefined;
    sentinelUsername?: string | undefined;
    sentinelPassword?: string | undefined;
    sentinels?: Array<{ host: string; port: number }> | undefined;
    connectTimeout?: number | undefined;
    name?: string | undefined;
    tls?: ConnectionOptions | undefined;
  };

  constructor(
    options: RedisCacheModuleOptions['config'],
  ) {
    this.config = {};
    Object.assign(this.config, options);
  }
}

export interface RedisCacheModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<RedisCacheModuleOptions> | RedisCacheModuleOptions;
  inject?: any[];
}
