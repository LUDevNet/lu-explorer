import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LuResService {

  constructor(private http: HttpClient) {
  }

  getResolvedResUrl(path: string): string {
    if (environment.data.resUrl) {
      return environment.data.resUrl + path;
    } else {
      return "/lu-res/" + path;
    }
  }

  getXML(path: string): Observable<XMLDocument> {
    const parser = new DOMParser();
    let url = this.getResolvedResUrl(path + '.xml');
    return this.http.get(url, { responseType: 'text'})
    .pipe(map(xmlStr => {
      let xml = parser.parseFromString(xmlStr, "application/xml");
      //console.log(xml);
      return xml;
    }));
  }
}
