import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction, ReplaySubject } from 'rxjs';
import { catchError, first, map, shareReplay, switchMap } from 'rxjs/operators';
import { DB, DB_Icons, Row, Table, TableName } from '../../../defs/cdclient';
import { Locale, LocaleField, LocaleIndex, LocaleRecordPick } from '../../../defs/locale';
import { mapToDict } from '../../../defs/rx';
import { environment } from '../../../environments/environment';
import { ComponentTypeSingle } from '../../../defs/api';

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

export class ApiConfig {
  base: string;
  user?: string;
  pass?: string;

  constructor(options: {
    base: string,
    user?: string,
    pass?: string,
  }) {
    this.base = options.base;
    if (options.user != null && options.user.length > 0) {
      this.user = options.user;
      this.pass = options.pass;
    }
  }

  get withCredentials(): boolean {
    return this.user == null
  }

  headers(): { [header: string]: string | string[]; } {
    if (this.user != null) {
      return {
        "Authorization": `Basic ${btoa(`${this.user}:${this.pass}`)}`
      }
    } else {
      return {};
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class LuCoreDataService {
  // The base URL for this API
  $apiUrl = new ReplaySubject<ApiConfig>(1);

  // The cache for the requests
  private cache: Map<string, ReplaySubject<any>> = new Map();

  constructor(private http: HttpClient) {
    this.$apiUrl.subscribe(cfg => {
      console.log("saving", cfg)
      localStorage.setItem("lu-explorer-cfg", JSON.stringify(cfg));
    });
    let cfg = localStorage.getItem("lu-explorer-cfg")
    this.$apiUrl.next(new ApiConfig(cfg ? JSON.parse(cfg) : {
      base: environment.data.apiUrl
    }))
  }

  setApiUrl(base: string, user: string, pass: string) {
    // FIXME: check for validity?
    this.cache.clear();
    this.$apiUrl.next(new ApiConfig({ base, user, pass }));
  }

  get(url: string, responseType?: "text", cachedTransformation?: OperatorFunction<any, any>): Observable<any> {
    if (!this.cache.has(url)) {
      let httpRequest = this.$apiUrl.pipe(switchMap(cfg => this.http.get(cfg.base + url, {
        headers: cfg.headers(),
        responseType: responseType,
        withCredentials: cfg.withCredentials,
      })))
        .pipe(
          catchError(this.handleError(url, { $error: null })),
        );
      if (cachedTransformation != null) {
        httpRequest = httpRequest.pipe(cachedTransformation);
      }
      let responseSubject = new ReplaySubject(1);
      httpRequest.subscribe(responseSubject);
      this.cache.set(url, responseSubject);
    }
    return this.cache.get(url);
  }

  querySql(query: string): Observable<any[]> {
    return this.get("v0/query/"+encodeURIComponent(query), "text", map(this.parseCsv));
  }

  private parseCsv(csv: string) {
    let headers = [];
    let haveHeaders = false;
    let insideString = false;
    let lastQuoteIndex = 0;
    let rows = [];
    let row = {};
    let field = "";
    let fieldIndex = 0;
    for (let i = 0; i < csv.length; i++) {
      if (csv[i] == "\"") {
        insideString = !insideString;
        if (insideString && lastQuoteIndex == i-1) {
          // escaped quote (""), this one counts
          field += "\"";
        }
        lastQuoteIndex = i;
        continue;
      }
      if (!insideString) {
        if (csv[i] == ",") {
          if (!haveHeaders) {
            headers.push(field);
          } else {
            if (lastQuoteIndex == 0 && field == "null") {
              field = null;
            }
            row[headers[fieldIndex]] = field;
          }
          lastQuoteIndex = 0;
          field = "";
          fieldIndex += 1;
          continue;
        } else if (csv[i] == "\n") {
          if (!haveHeaders) {
            headers.push(field);
            haveHeaders = true;
          } else {
            if (lastQuoteIndex == 0 && field == "null") {
              field = null;
            }
            row[headers[fieldIndex]] = field;
            rows.push(row);
            row = {};
          }
          lastQuoteIndex = 0;
          field = "";
          fieldIndex = 0;
          continue;
        }
      }
      field += csv[i];
    }
    return rows;
  }

  query(url: string, body: any): Observable<any | { $error: any }> {
    return this.$apiUrl.pipe(switchMap(cfg => this.http.request("QUERY", cfg.base + url, {
      body: JSON.stringify(body),
      headers: cfg.headers(),
      withCredentials: cfg.withCredentials,
    }))).pipe(
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
    let path = key.replace(/_/g, '/');
    for (const part of ids) {
      path += `/${part}`;
    }
    return this.get(`v0/locale/${path}/$all`);
  }

  queryLocale<T>(key: string, ...params: (string | number)[][]): Observable<T> {
    if (!params.length || params.some(x => !x.length)) return of({} as T);
    return this.query(`v0/locale/${key}`, params);
  }

  getLocaleEntry(...key: (string | number)[]): Observable<LocaleNode> {
    return this.get(`v0/locale/${key.join('/').replace(/_/g, '/')}`);
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

  lotsForComponent(id: number, cid: number): Observable<number[]> {
    return this.getRevEntry<ComponentTypeSingle | null>('component_types/' + cid, id).pipe(map((x) => x?.lots));
  }

  lotsForComponents(ids: number[], cid: number): {id: number, lots$:  Observable<number[]>}[] {
    return ids.map(id => ({id, lots$: this.lotsForComponent(id, cid) }));
  }

  lotsForComponentsOpt(ids: number[] | null, cid: number): {id: number, lots$:  Observable<number[]>}[] | undefined {
    return ids?.map(id => ({id, lots$: this.lotsForComponent(id, cid) }));
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
