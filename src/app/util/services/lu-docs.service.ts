import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LuDocsService {

  baseUrl: string;

  constructor() {
    if (environment.production) {
      // using public API
      this.baseUrl = 'https://lu-docs.readthedocs.io/';
    } else {
      // serving API locally
      this.baseUrl = 'http://localhost:8000/lu-docs/';
    }
  }

  link(path: string): string {
    return this.baseUrl + path + '.html';
  }
}
