import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LuResService {

  private baseUrl: string = "";

  constructor(private http: HttpClient) {
    if (environment.production) {
      // using public API
      this.baseUrl = 'https://xiphoseer.github.io/';
    } else {
      // serving API locally
      this.baseUrl = 'http://localhost:8000/';
    }
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getResolvedResUrl(path: string): string {
    return this.baseUrl + 'lu-res/' + path;
  }

  getXML(path: string): Observable<XMLDocument> {
    const parser = new DOMParser();
    return this.http.get(this.getResolvedResUrl(path + '.xml'), { responseType: 'text'})
    .pipe(map(xmlStr => {
      return parser.parseFromString(xmlStr, "application/xml");
    }));
  }
}
