import { Injectable } from '@angular/core';
import { Locale_Objects } from '../../locale';
import { LuCoreDataService } from './lu-core-data.service';
import Document from 'flexsearch/dist/module/document.js';
import { ReplaySubject } from 'rxjs';

export interface HasID {
  id: number;
}

export interface Search_Object extends Locale_Objects, HasID {}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  object_index: Document;
  $object_index_ready: ReplaySubject<boolean>;
  objects: Map<number, Search_Object> = new Map();
  objectsLoadingState: "pending" | "loading" | "done" = "pending";

  constructor(private luCoreData: LuCoreDataService) {
    this.object_index = new Document({
      tokenize: "full",
      document: {
        id: "id",
        index: ["id", "name", "description"],
      },
    });
    console.log(this.object_index);
    this.$object_index_ready = new ReplaySubject(1);
  }

  loadObjectSearch() {
    if (this.objectsLoadingState != "pending") {
      return;
    }
    this.objectsLoadingState = "loading";
    this.luCoreData.getLocaleSubtree<Locale_Objects>("Objects").subscribe(x => {
      this.objectsLoadingState = "done";
      for (const [key, value] of Object.entries(x)) {
        const id = Number(key);
        const entry = Object.assign(value, {id: id});
        this.object_index.add(id, entry);
        this.objects.set(id, entry);
      }
      this.$object_index_ready.next(true);
    });
  }
}
