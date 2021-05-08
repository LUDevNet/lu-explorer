import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

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

  getTableEntry(table: string, key: string | number): Observable<any[]> {
    return this.get(`v0/tables/${table}/${key}`);
  }
}
