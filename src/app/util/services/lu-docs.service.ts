import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LuDocsService {

  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://docs.lu-dev.net/';
  }

  link(path: string): string {
    return this.baseUrl + path + '.html';
  }
}
