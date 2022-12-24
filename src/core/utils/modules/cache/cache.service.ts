import { Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { EnvService } from "src/infra/configs/env.service";
import { ICacheUtil } from "./cache.interface";

@Injectable()
export class CacheUtil implements ICacheUtil {
  constructor(
    @Inject("CACHE_MANAGER") private cacheManager: Cache,
    private envService: EnvService,
  ) {}

  async set(key: string, value: any, ttl?: number) {
    const expireIn = this._getTTL(ttl);
    await this.cacheManager.set(key, value, { ttl: expireIn });
  }

  async get(key: string) {
    return await this.cacheManager.get(key);
  }

  async delete(key: string) {
    return await this.cacheManager.del(key);
  }

  private _getTTL(ttl?: number) {
    return typeof ttl === "undefined" ? this.envService.jwtLimit : ttl;
  }
}
