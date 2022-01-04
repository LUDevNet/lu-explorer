import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchService, Search_Object } from '../../util/services/search.service';
import Index from 'flexsearch/dist/module/index.js';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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

  // Add the IDs to the output dict and return the number of new IDs
  pushBatch(result: number[], docs: Docs, wasLimit: number): number {
    //console.log("result: ", result)
    if (result.length == wasLimit) {
      this.offset += wasLimit;
    } else {
      this.offset = 0;
      this.field_index += 1;
    }
    this.hasMore = this.field_index < 6; // FIXME: 
    let newResults = 0;
    for (let id of result) {
      if (!this.keys.has(id)) {
        newResults += 1;
        this.keys.add(id);
        const doc = docs.get(id) || { id: id, name: "FIXME" };
        this.results.push(doc);
      }
    }
    return newResults;
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

  subscriptions = new Subscription();
  state: SearchState;
  indices: Index[];

  interactionObserver: IntersectionObserver;

  @ViewChild('more') moreElement: ElementRef;
  @ViewChild('input') inputElement: ElementRef<HTMLInputElement>;

  constructor(private search: SearchService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.onReady(this.search.loadObjectSearch());
    this.indices = [
      this.search.obj_index_locale_name,
      this.search.obj_index_db_name,
      this.search.obj_index_db_display_name,
      this.search.obj_index_locale_description,
      this.search.obj_index_db_description,
      this.search.obj_index_db_internal_notes,
    ];

    this.subscriptions.add(this.search.$object_index_ready.subscribe(this.onReady.bind(this)));
    this.query.pipe(debounceTime(200)).subscribe(this.searchForTerm.bind(this));
  }

  onReady(x: boolean) {
    const wasReady = this.ready;
    console.log("ready", x);
    this.ready = x;
    if (!wasReady && x && this.state) {
      this.loadOneBatch(this.state);
    }
  }

  searchForTerm(term: string, initial: boolean = false) {
    console.log("search", term);

    // Update route
    if (!initial) {
      this.router.navigate([], { 
        relativeTo: this.activatedRoute, 
        queryParams: { query: term },
        replaceUrl: true,
      });
    }
    
    const newState = new SearchState(term);
    this.loadOneBatch(newState);
    this.state = newState;
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    this.interactionObserver = new IntersectionObserver((entries) => {
      let [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => this.loadMore(), 100);
      }
    });
    this.interactionObserver.observe(this.moreElement.nativeElement);
    const term = this.activatedRoute.snapshot.queryParamMap.get('query');
    
    if (term) this.inputElement.nativeElement.value = term;
    this.state = new SearchState(term);
    if (this.ready) {
      this.loadOneBatch(this.state);
    }
  }

  loadOneBatch(state: SearchState) {
    let count = 0;
    while (count < BATCH_SIZE && state.field_index < 6) {
      const limit = BATCH_SIZE - count
      let batch = this.findObject(state.term, state.offset, state.field_index, limit);
      count += state.pushBatch(batch, this.search.objects, limit);
    }
  }

  loadMore() {
    //console.log("Loading more");
    const state = this.state;
    state.hasMore = false;
    this.loadOneBatch(state);
  }

  updateSearch(event: Event) {
    this.query.next((event.target as HTMLInputElement).value);
  }

  findObject(term: string, offset: number, field_index: number, limit: number): number[] {
    //console.log("find object", term, offset, field_index, limit);
    let index = this.indices[field_index];
    return index ? index.search(term, { limit, offset: offset }) : [];
  }
}
