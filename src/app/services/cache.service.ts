import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private readonly cache:any = {};
  constructor() { }

  getCacheItem(name:string) {
    if (this.cache[name]) {
      return this.cache[name];
    }
  }
  setCacheItem(name:string,value: any) {
    this.cache[name] = value;
  }
}
