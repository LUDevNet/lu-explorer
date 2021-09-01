import { Injectable } from '@angular/core';
import { LuJsonService } from './lu-json.service';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { KeyValuePipe } from '@angular/common';


@Injectable()
export class LuLocaleService {

  tables: any = {};
  pages: any = {};

  credits: Observable<{}>;

  constructor(private luJsonService: LuJsonService) { }

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
    let idKey = String(id);
    return this.getLocalePage(table, Math.floor(id / 256)).pipe(map((page: {[key: string]: string}) => {
      if (page && idKey in page) {
        return page[idKey];
      } else {
        return "[missing]";
      }
    }));
  }

  translate(value: string): Observable<string> {
    // TODO: generalize
    if (!this.credits) this.credits = this.luJsonService.makeRequest("locale/UI/CREDITS", "%[UI_CREDITS]");
    return this.credits.pipe(map(dict => {
      return value.replace(/%\[([0-9A-Z_]+)\]/g, (_match, key) => {
        let shortKey = key.replace("UI_CREDITS_", "");
        return dict[shortKey];
      });
    }));
  }
}
