import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { Locale_Objects } from '../../locale';
import { SearchService, Search_Object } from '../../util/services/search.service';

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
  offset: number = 0;
  hasMore: boolean;

  constructor(term: string) {
    this.term = term;
    this.results = []
    this.keys = new Set();
    this.offset = 0;
    this.hasMore = false;
  }

  pushBatch(result: BasicSearchResult[], docs: Docs) {
    this.offset += BATCH_SIZE;
    this.hasMore = false;
    for (let res of result) {
      console.log("Loading batch field", res.field, "size", res.result.length);
      if (res.result.length == BATCH_SIZE) {
        this.hasMore = true;
      }
      for (let id of res.result) {
        if (!this.keys.has(id)) {
          this.keys.add(id);
          const doc = docs.get(id);
          console.log("push result", )
          this.results.push(doc);
        }
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

  interactionObserver: IntersectionObserver;

  @ViewChild('more') moreElement: ElementRef;

  constructor(private search: SearchService) { }

  ngOnInit(): void {
    this.search.loadObjectSearch();
    this.search.$object_index_ready.subscribe(x => this.ready = x)
    this.query.pipe(debounceTime(200)).subscribe(term => {
      const result = this.findObject(term, 0);
      const newState = new SearchState(term);
      newState.pushBatch(result, this.search.objects);
      this.state = newState;
    });
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
    let batch = this.findObject(state.term, state.offset);
    state.pushBatch(batch, this.search.objects);
  }

  updateSearch(event: Event) {
    this.query.next((event.target as HTMLInputElement).value);
  }

  findObject(term: string, offset: number): BasicSearchResult[] {
    return this.search.object_index.search(term, { limit: BATCH_SIZE, offset: offset });
  }
}
