import { Injectable } from '@angular/core';
import { LuJsonService } from './lu-json.service';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class LuLocaleService {

  tables: any = {};
  pages: any = {};

  constructor(private luJsonService: LuJsonService) { }

  getLocaleTable(table: string): Observable<any>
  {
    if (!(table in this.tables))
    {
      this.tables[table] = this.luJsonService.getLocale(table);
    }
    return this.tables[table];
  }

  getLocalePage(table: string, page: number): Observable<any>
  {
    if (!(table in this.pages))
    {
      this.pages[table] = {};
    }
    let pageKey = String(page);
    if (!(pageKey in this.pages[table]))
    {
      this.pages[table][pageKey] = this.luJsonService.getLocalePage(table, page);
    }
    return this.pages[table][pageKey];
  }

  getLocaleEntry(table: string, id: number): Observable<any>
  {
    let idKey = String(id);
    return this.getLocalePage(table, Math.floor(id / 256)).pipe(map(page => page[idKey]));
  }

}
