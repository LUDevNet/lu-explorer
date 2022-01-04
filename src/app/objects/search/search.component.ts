import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchService, Search_Object } from '../../util/services/search.service';
import Index from 'flexsearch/dist/module/index.js';

export interface BasicSearchResult {
  field: string,
  result: number[],
}

export interface Doc<T> {
  id: number;
  doc: T;
}

export interface EnrichedSearchResult {
  field: string,
  result: Doc<Search_Object>[],
}

const BATCH_SIZE: number = 10;

type Docs = Map<number, Search_Object>;

class SearchState {
  term: string;
  results: Search_Object[];
  keys: Set<number>;
  field_index: number = 0;
  offset: number = 0;
  hasMore: boolean;

  constructor(term: string) {
    this.term = term;
    this.results = []
    this.keys = new Set();
    this.offset = 0;
    this.field_index = 0;
    this.hasMore = false;
  }

  pushBatch(result: number[], docs: Docs, wasLimit: number) {
    console.log("result: ", result)
    if (result.length == wasLimit) {
      this.offset += wasLimit;
    } else {
      this.offset = 0;
      this.field_index += 1;
    }
    this.hasMore = this.field_index < 6; // FIXME: 
    for (let id of result) {
      if (!this.keys.has(id)) {
        this.keys.add(id);
        const doc = docs.get(id) || { id: id, name: "FIXME" };
        this.results.push(doc);
      }
    }
  }
}

@Component({
  selector: 'lux-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class ObjectsSearchComponent implements OnInit {
  ready: boolean = false;
  query: Subject<string> = new Subject();

  state: SearchState;
  indices: Index[];

  interactionObserver: IntersectionObserver;

  @ViewChild('more') moreElement: ElementRef;

  constructor(private search: SearchService) { }

  ngOnInit(): void {
    this.search.loadObjectSearch();
    this.search.$object_index_ready.subscribe(x => this.ready = x)
    this.query.pipe(debounceTime(200)).subscribe(term => {
      const newState = new SearchState(term);
      let count = 0;
      while (count < BATCH_SIZE && newState.field_index < 6) {
        const limit = BATCH_SIZE - count;
        const result = this.findObject(term, 0, 0, limit);
        count += result.length;
        newState.pushBatch(result, this.search.objects, limit);
      }
      this.state = newState;
    });
    this.indices = [
      this.search.obj_index_locale_name,
      this.search.obj_index_db_name,
      this.search.obj_index_db_display_name,
      this.search.obj_index_locale_description,
      this.search.obj_index_db_description,
      this.search.obj_index_db_internal_notes,
    ];
  }

  ngAfterViewInit() {
    this.interactionObserver = new IntersectionObserver((entries) => {
      let [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => this.loadMore(), 100);
      }
    });
    this.interactionObserver.observe(this.moreElement.nativeElement);
  }

  loadMore() {
    console.log("Loading more");
    const state = this.state;
    state.hasMore = false;
    let count = 0;
    while (count < BATCH_SIZE && state.field_index < 6) {
      const limit = BATCH_SIZE - count
      let batch = this.findObject(state.term, state.offset, state.field_index, limit);
      count += batch.length;
      state.pushBatch(batch, this.search.objects, limit);
    }
  }

  updateSearch(event: Event) {
    this.query.next((event.target as HTMLInputElement).value);
  }

  findObject(term: string, offset: number, field_index: number, limit: number): number[] {
    console.log("find object", term, offset, field_index, limit);
    let index = this.indices[field_index];
    return index ? index.search(term, { limit, offset: offset }) : [];
  }
}
