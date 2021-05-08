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
    this.baseUrl = environment.data.baseUrl;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getResolvedResUrl(path: string): string {
    return this.baseUrl + 'lu-res/' + path;
  }

  getXML(path: string): Observable<XMLDocument> {
    const parser = new DOMParser();
    let url = this.getResolvedResUrl(path + '.xml');
    return this.http.get(url, { responseType: 'text'})
    .pipe(map(xmlStr => {
      let xml = parser.parseFromString(xmlStr, "application/xml");
      console.log(xml);
      return xml;
    }));
  }
}
