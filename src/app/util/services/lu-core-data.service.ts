import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface LocaleNode {
  value: string,
  int_keys: number[],
  str_keys: string[],
}

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

  getLocaleSubtree<T>(key: string): Observable<{[key: string]: T}> {
    return this.get(`v0/locale/${key.replace('_', '/')}/$all`);
  }

  getLocaleEntry(key: string): Observable<LocaleNode> {
    return this.get(`v0/locale/${key.replace('_', '/')}`);
  }

  getTableEntry<T>(table: string, key: string | number): Observable<T[]> {
    return this.get(`v0/tables/${table}/${key}`);
  }

  getSingleTableEntry<T>(table: string, key: string | number): Observable<T> {
    return this.getTableEntry<T>(table, key).pipe(map(x => x[0]));
  }

  getRev<T>(table: string): Observable<T> {
    return this.get(`v0/rev/${table}`);
  }
  
  getRevEntry<T>(table: string, key: string | number): Observable<T> {
    return this.get(`v0/rev/${table}/${key}`);
  }
}
