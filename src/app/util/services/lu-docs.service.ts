import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LuDocsService {

  baseUrl: string;

  constructor() {
    this.baseUrl = '/lu-docs/';
  }

  link(path: string): string {
    return this.baseUrl + path + '.html';
  }
}
