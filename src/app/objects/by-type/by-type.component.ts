import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuJsonService, LuLocaleService } from '../../services';
import { DB_ObjectRef_ByType } from '../../cdclient';

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})
export class ObjectsByTypeComponent implements OnInit {

  page_size: number = 100;
  page: number = -1;
  page_count: number = -1;
  type: string = "";
  objects: Observable<DB_ObjectRef_ByType[]>;
  count: Observable<number[]>;

  constructor(
    private luJsonService: LuJsonService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.objects = this.route.paramMap
      .pipe(map(this.mapRouteInfo),tap(this.tapRef.bind(this)),switchMap(this.loadDataObservable.bind(this)))
    this.objects.subscribe(x => this.cd.detectChanges());
  }

  mapRouteInfo(map) {
    let type = map.get('type');
    if (map.has('page')) {
      let page = map.get('page');
      return {type: type, page: +page};
    } else {
      return {type: type, page: 0};
    }
  }

  tapRef(ref) {
    console.log(ref);
    this.type = ref.type;
    this.page = ref.page;
    this.cd.detectChanges();
  }

  loadDataObservable(ref) {
    return this.luJsonService
      .getObjectType(ref.type)
      .pipe(tap(this.setPageCounters.bind(this, ref)), map(this.processData.bind(this, ref)));
  }

  setPageCounters(ref, data) {
    this.page_count = Math.ceil(data.length / this.page_size);
  }

  processData(ref, data) {
    let sorted = data.sort(this.sortObjectTypeRefs);
    let from = this.page_size * ref.page;
    let to = from + this.page_size;
    let page = sorted.slice(from, to);
    console.log(page);
    return page;
  }

  sortObjectTypeRefs(a,b) {
    return a.id - b.id;
  }



}
