import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LuResService {

  private baseUrl: string = "";

  constructor() {
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
}
