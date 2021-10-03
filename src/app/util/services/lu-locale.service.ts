import { Injectable } from '@angular/core';
import { LuJsonService } from './lu-json.service';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { KeyValuePipe } from '@angular/common';
import { LuCoreDataService } from './lu-core-data.service';


@Injectable()
export class LuLocaleService {

  tables: any = {};
  pages: any = {};

  credits: Observable<{}>;

  constructor(private luJsonService: LuJsonService, private luCoreDataService: LuCoreDataService) { }

  getLocaleTable(table: string): Observable<any> {
    if (!(table in this.tables)) {
      this.tables[table] = this.luJsonService.getLocale(table);
    }
    return this.tables[table];
  }

  getLocalePage(table: string, page: number): Observable<any> {
    if (!(table in this.pages)) {
      this.pages[table] = {};
    }
    let pageKey = String(page);
    if (!(pageKey in this.pages[table])) {
      this.pages[table][pageKey] = this.luJsonService.getLocalePage(table, page);
    }
    return this.pages[table][pageKey];
  }

  getLocaleEntry(table: string, id: number): Observable<any> {
    return this.luCoreDataService.getLocaleSubtree(`${table}_${id}`)
  }

  translate(value: string): Observable<string> {
    // TODO: generalize
    if (!this.credits) this.credits = this.luCoreDataService.getLocaleSubtree("UI_CREDITS"); // , "%[UI_CREDITS]"
    return this.credits.pipe(map(dict => {
      return value.replace(/%\[([0-9A-Z_]+)\]/g, (_match, key) => {
        let shortKey = key.replace("UI_CREDITS_", "");
        return dict[shortKey];
      });
    }));
  }
}
