import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { Locale_Objects } from '../../locale';
import { SearchService } from '../../util/services/search.service';

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
  result: Doc<Locale_Objects>[],
}

const BATCH_SIZE: number =  10;

@Component({
  selector: 'lux-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class ObjectsSearchComponent implements OnInit {
  ready: boolean = false;
  query: Subject<string> = new Subject();

  results: Doc<Locale_Objects>[] = [];
  resultKeys: Set<number> = new Set();
  active_term?: string;
  _hasMore: boolean = false;

  offset: number = 0;

  interactionObserver: IntersectionObserver;

  @ViewChild('more') moreElement: ElementRef;

  constructor(private search: SearchService) { }

  ngOnInit(): void {
    this.search.loadObjectSearch();
    this.search.$object_index_ready.subscribe(x => this.ready = x )
    this.query.pipe(debounceTime(200)).subscribe(term => {
      const result = this.findObject(term, 0);
      this.pushBatch(result);
      this.active_term = term;
    });
  }

  pushBatch(result: BasicSearchResult[]) {
    this.offset += BATCH_SIZE;
    this._hasMore = false;
    for(let res of result) {
      if (res.result.length == BATCH_SIZE) {
        this._hasMore = true;
      }
      for (let id of res.result) {
        if (!this.resultKeys.has(id)) {
          this.resultKeys.add(id);
          this.results.push({
            id: id,
            doc: this.search.objects[String(id)]
          });
        }
      }
    }
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

  loadMore(): void {
    this._hasMore = false;
    console.log(this.active_term, this.offset);
    let batch = this.findObject(this.active_term, this.offset);
    this.pushBatch(batch);
  }

  updateSearch(event: Event) {
    this.results = [];
    this.resultKeys.clear();
    this.offset = 0;
    this.query.next((event.target as HTMLInputElement).value);
  }

  findObject(term: string, offset: number): BasicSearchResult[] {
    return this.search.object_index.search(term, { limit: BATCH_SIZE, offset: offset });
  }
}
