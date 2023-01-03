import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LuCoreDataService } from './lu-core-data.service';


@Injectable()
export class LuLocaleService {

  tables: any = {};
  pages: any = {};

  credits: Observable<{}>;

  constructor(private luCoreDataService: LuCoreDataService) { }

  getLocaleEntry(table: string, id: number): Observable<any> {
    return this.luCoreDataService.getLocaleSubtree(`${table}_${id}`)
  }

  translate(value: string): Observable<string> {
    // TODO: generalize
    if (!this.credits) this.credits = this.luCoreDataService.getLocaleSubtree("UI_CREDITS"); // , "%[UI_CREDITS]"
    return this.credits.pipe(map(dict => {
      return value.replace(/%\[([0-9A-Z_]+)\]/g, (_match, key) => {
        let shortKey: string = key.replace("UI_CREDITS_", "");
        let ret = dict[shortKey];
        if (!ret) {
          let [first, rest] = shortKey.split('_', 2);
          ret = dict[first];
          console.log(first, rest, ret);
          return ret ? ret[rest] : undefined;
        }
        return ret;
      });
    }));
  }
}
