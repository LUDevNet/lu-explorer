import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../services';
import { component_names } from '../../components';
import { DB_ObjectRef_ByComponent } from '../../cdclient';

interface Ref {
  id: number,
  page: number,
};

@Component({
  selector: 'app-by-component',
  templateUrl: './by-component.component.html',
  styleUrls: ['./by-component.component.css']
})
export class ObjectsByComponentComponent implements OnInit {

  page_size: number = 100;
  page: number = -1;
  page_count: number = -1;
  component_id: number = -1;
  component_name: string = "[Unnamed]";
  objects: Observable<DB_ObjectRef_ByComponent[]>;
  count: Observable<number[]>;

  constructor(
    private route: ActivatedRoute,
    private luJsonService: LuJsonService,
    private c: ChangeDetectorRef) {}

  ngOnInit() {
    this.objects = this.route.paramMap
      .pipe(map(this.mapRouteInfo),tap(this.tapRef.bind(this)),switchMap(this.loadDataObservable.bind(this)))
  }

  mapRouteInfo(map): Ref {
    let comp_id_str = map.get('component');
    if (map.has('page')) {
      let page = map.get('page');
      return {id: +comp_id_str, page: +page};
    } else {
      return {id: +comp_id_str, page: 0};
    }
  }

  tapRef(ref: Ref) {
    this.component_id = ref.id;
    this.page = ref.page;
    let comp_id_str = String(ref.id);
    if (component_names.hasOwnProperty(comp_id_str)) {
      this.component_name = component_names[ref.id];
    }
    this.c.detectChanges();
  }

  loadDataObservable(ref: Ref) {
    return this.luJsonService
      .getObjectComponent(ref.id)
      .pipe(tap(this.setPageCounters.bind(this, ref)), map(this.processData.bind(this, ref)));
  }

  setPageCounters(ref: Ref, data: DB_ObjectRef_ByComponent[]) {
    this.page_count = Math.ceil(data.length / this.page_size);
    this.c.detectChanges();
  }

  processData(ref: Ref, data: DB_ObjectRef_ByComponent[]) {
    let sorted = data.sort(this.sortObjectComponentRefs);
    let from = this.page_size * ref.page;
    let to = from + this.page_size;
    return sorted.slice(from, to);
  }


  sortObjectComponentRefs(a,b) {
    let diff = a.comp_val - b.comp_val;
    return (diff == 0) ? a.id - b.id : diff;
  }

}
