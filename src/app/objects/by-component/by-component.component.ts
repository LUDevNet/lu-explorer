import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../services';
import { component_names } from '../../components';
import { DB_ObjectRef_ByComponent } from '../../cdclient';

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
    private luJsonService: LuJsonService) {}

  ngOnInit() {
    this.objects = this.route.paramMap
      .pipe(map(this.mapRouteInfo),tap(this.tapRef.bind(this)),switchMap(this.loadDataObservable.bind(this)))
  }

  tapRef(ref) {
    this.component_id = ref.id;
    this.page = ref.page;
    let comp_id_str = String(ref.id);
    if (component_names.hasOwnProperty(comp_id_str)) {
      this.component_name = component_names[ref.id];
    }
  }

  loadDataObservable(ref) {
    return this.luJsonService
      .getObjectComponent(ref.id)
      .pipe(tap(this.setPageCounters.bind(this, ref)), map(this.processData.bind(this, ref)));
  }

  setPageCounters(ref, data) {
    this.page_count = Math.ceil(data.length / this.page_size);
  }

  processData(ref, data) {
    let sorted = data.sort(this.sortObjectComponentRefs);
    let from = this.page_size * ref.page;
    let to = from + this.page_size;
    return sorted.slice(from, to);
  }

  mapRouteInfo(map) {
    let comp_id_str = map.get('component');
    if (map.has('page')) {
      let page = map.get('page');
      return {id: +comp_id_str, page: +page};
    } else {
      return {id: +comp_id_str, page: 0};
    }
  }

  sortObjectComponentRefs(a,b) {
    let diff = a.comp_val - b.comp_val;
    return (diff == 0) ? a.id - b.id : diff;
  }

}
