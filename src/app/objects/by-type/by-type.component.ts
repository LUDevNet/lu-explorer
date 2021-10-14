import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuCoreDataService } from '../../services';
import { DB_ObjectRef_ByType } from '../../cdclient';

interface ObjectsByTypeEmbedded {
  objects: {[key: number]: {id: number, name: number}};
}

interface ObjectsByType {
  object_ids: number[];
  _embedded: ObjectsByTypeEmbedded;
}

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
    private luCoreData: LuCoreDataService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.objects = this.route.paramMap
      .pipe(map(this.mapRouteInfo), tap(this.tapRef.bind(this)), switchMap(this.loadDataObservable.bind(this)))
    this.objects.subscribe(x => this.cd.detectChanges());
  }

  mapRouteInfo(map) {
    let type = map.get('type');
    if (map.has('page')) {
      let page = map.get('page');
      return { type: type, page: +page };
    } else {
      return { type: type, page: 0 };
    }
  }

  tapRef(ref) {
    this.type = ref.type;
    this.page = ref.page;
    this.cd.detectChanges();
  }

  loadDataObservable(ref) {
    return this.luCoreData.getRevEntry<ObjectsByType>('object_types', ref.type)
      .pipe(
        map((v: ObjectsByType) => v.object_ids.map(id => {
          return { id, name: v._embedded.objects[id].name };
        })),
        tap(this.setPageCounters.bind(this, ref)),
        map(this.processData.bind(this, ref))
      );
  }

  setPageCounters(ref, data) {
    this.page_count = Math.ceil(data.length / this.page_size);
  }

  processData(ref, data) {
    let sorted = data.sort(this.sortObjectTypeRefs);
    let from = this.page_size * ref.page;
    let to = from + this.page_size;
    let page = sorted.slice(from, to);
    return page;
  }

  sortObjectTypeRefs(a, b) {
    return a.id - b.id;
  }



}
