import { Injectable } from '@angular/core';
import { Locale_Objects } from '../../locale';
import { LuCoreDataService } from './lu-core-data.service';
import Index from 'flexsearch/dist/module/index.js';
import { ReplaySubject } from 'rxjs';

export interface HasID {
  id: number;
}

export interface SearchIndex_Object {
  /** Name */
  n?: string;
  /** Description */
  d?: string;
  /** Internal Notes */
  t?: string;
  /** Display name */
  i?: string;
}
type SearchIndex_Objects = {[key: number]: SearchIndex_Object };

export interface Search_Object extends Locale_Objects, HasID {}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  obj_index_locale_name: Index;
  obj_index_locale_description: Index;
  obj_index_db_name: Index;
  obj_index_db_description: Index;
  obj_index_db_internal_notes: Index;
  obj_index_db_display_name: Index;
  
  $object_index_ready: ReplaySubject<boolean>;
  objects: Map<number, Search_Object> = new Map();
  obj_load: number = 0;
  obj_loaded: boolean = false;

  constructor(private luCoreData: LuCoreDataService) {
    const index_options = { tokenize: 'full' };
    this.obj_index_locale_name = new Index(index_options);
    this.obj_index_locale_description = new Index(index_options);
    this.obj_index_db_name = new Index(index_options);
    this.obj_index_db_description = new Index(index_options);
    this.obj_index_db_internal_notes = new Index(index_options);
    this.obj_index_db_display_name = new Index(index_options);
    this.$object_index_ready = new ReplaySubject(1);
  }

  loadObjectSearch() {
    if (this.obj_load > 0) {
      return;
    }
    this.obj_load += 1;
    this.luCoreData.getLocaleSubtree<Locale_Objects>("Objects").subscribe(x => {
      for (const [key, value] of Object.entries(x)) {
        const id = Number(key);
        if (value.name) this.obj_index_locale_name.append(id, value.name);
        if (value.description) this.obj_index_locale_description.append(id, value.description);
        
        let store = this.objects.get(id);
        if (store) {
          Object.assign(store, value);
        } else {
          this.objects.set(id, Object.assign(value, {id: id}));
        }
      }
      this.checkComplete();
    });
    this.luCoreData.getRevEntry<SearchIndex_Objects>("objects", "search_index").subscribe(x => {
      for (const [key, value] of Object.entries(x)) {
        const id = Number(key);
        if (value.n) this.obj_index_db_name.append(id, value.n);
        if (value.d) this.obj_index_db_description.append(id, value.d);
        if (value.i) this.obj_index_db_display_name.append(id, value.i);
        if (value.t) this.obj_index_db_internal_notes.append(id, value.t);
        let store = this.objects.get(id);
        if (store) {
          if (!store.name) store.name = value.n;
          if (!store.description) store.description = value.d;
        } else {
          this.objects.set(id, {id: id, name: value.n, description: value.d })
        }
      }
      this.checkComplete();
    });
  }

  checkComplete() {
    this.obj_load += 1;
    if (this.obj_load == 3) {
      this.$object_index_ready.next(true);
      this.obj_loaded = true;
    }
  }
}
