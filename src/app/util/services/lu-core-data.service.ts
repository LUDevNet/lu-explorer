import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction, ReplaySubject } from 'rxjs';
import { catchError, first, map, shareReplay, switchMap } from 'rxjs/operators';
import { DB, DB_Icons, Row, Table, TableName } from '../../../defs/cdclient';
import { Locale, LocaleField, LocaleIndex, LocaleRecordPick } from '../../../defs/locale';
import { mapToDict } from '../../../defs/rx';
import { environment } from '../../../environments/environment';

export interface LocaleNode {
  value: string,
  int_keys: number[],
  str_keys: string[],
}

const ICONS_KEYS: (keyof DB_Icons)[] = [
  "IconID",
  "IconPath",
  "IconName",
]

@Injectable({
  providedIn: 'root'
})
export class LuCoreDataService {
  // The base URL for this API
  apiUrl: string = environment.data.apiUrl;
  // The cache for the requests
  cache: { [key: string]: ReplaySubject<any> } = {};

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    if (!this.cache.hasOwnProperty(url)) {
      let httpRequest = this.http.get(this.apiUrl + url)
        .pipe(
          catchError(this.handleError(url, { $error: null })),
        )
      let responseSubject = new ReplaySubject(1);
      httpRequest.subscribe(responseSubject);
      this.cache[url] = responseSubject;
    }
    return this.cache[url];
  }

  query(url: string, body: any): Observable<any | { $error: any }> {
    return this.http.request("QUERY", this.apiUrl + url, {
      body: JSON.stringify(body)
    }).pipe(
      catchError(this.handleError(url, { $error: null })),
      first(),
      shareReplay(1)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error.message); // log to console

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMap<T>(path: string): Observable<T> {
    return this.get(`v0/maps/${path.toLowerCase()}.json`);
  }

  getScript<T>(path: string): Observable<T> {
    return this.get(`v0/scripts/${path.toLowerCase()}.json`);
  }

  getLocaleSubtree<T>(key: string, ...ids: (string | number)[]): Observable<{ [key: string]: T }> {
    let path = key.replace('_', '/');
    for (const part of ids) {
      path += `/${part}`;
    }
    return this.get(`v0/locale/${path}/$all`);
  }

  queryLocale<T>(key: string, ...params: (string | number)[][]): Observable<T> {
    if (!params.length || params.some(x => !x.length)) return of({} as T);
    return this.query(`v0/locale/${key}`, params);
  }

  getLocaleEntry(key: string): Observable<LocaleNode> {
    return this.get(`v0/locale/${key.replace('_', '/')}`);
  }

  getTableEntry<K>(table: K & TableName, key: string | number): Observable<Table<K>> {
    return this.get(`v0/tables/${table}/${key}`);
  }

  getFullTable<K>(table: K & TableName): Observable<Table<K>> {
    return this.getTableEntry<K>(table, "all");
  }

  queryTableEntries<T>(table: string, keys: string[] | number[], columns: (keyof T)[]): Observable<T[]> {
    if (Array.isArray(keys) && !keys.length) {
      console.warn(`Called queryTableEntries(${table}) with empty key set`);
      return of([]);
    }
    return this.query(`v0/tables/${table}/all`, { pks: keys, columns: columns });
  }

  getSingleTableEntry<K>(table: K & keyof DB, key: string | number): Observable<Row<K & keyof DB> | null> {
    function first(rows: Table<K>): Row<K & keyof DB> {
      return rows[0] as Row<K & keyof DB>
    }
    return this.getTableEntry<K>(table, key).pipe(map(first as any));
  }

  getRev<T>(table: string): Observable<T> {
    return this.get(`v0/rev/${table}`);
  }

  getRevEntry<T>(table: string, key: string | number): Observable<T> {
    return this.get(`v0/rev/${table}/${key}`);
  }

  // For RxJS
  queryTableEntries$<K extends (string[] | number[]), T>(table: string, columns: (keyof T)[]): OperatorFunction<K, T[]> {
    let cd = this;
    return switchMap((data: K) => cd.queryTableEntries<T>(table, data, columns));
  }

  queryLocaleNum$<K, F extends LocaleField<K>, R extends LocaleRecordPick<K, F>>(t: K & keyof Locale, fields: F[]): OperatorFunction<LocaleIndex<K>[], R> {
    let cd = this;
    return (source) => source.pipe(
      switchMap(data => cd.queryLocale<R>(t, data, fields)),
      shareReplay(1),
    );
  }

  queryIcons(): OperatorFunction<number[], DB_Icons[]> {
    return this.queryTableEntries$<number[], DB_Icons>('Icons', ICONS_KEYS);
  }

  icons(): OperatorFunction<number[], Record<number, DB_Icons>> {
    return (source) => source.pipe(this.queryIcons(), mapToDict("IconID"));
  }
}
