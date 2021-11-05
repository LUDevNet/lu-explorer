import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuCoreDataService, LuJsonService } from '../../services';
import { component_names } from '../../../defs/components';
import { DB_ObjectRef_ByComponent } from '../../../defs/cdclient';
import { ComponentTypeSingle, ObjectsRefDict, Rev_ComponentType } from '../../../defs/api';
import { ThrowStmt } from '@angular/compiler';

interface ByComponent {
  id: number;
  lots: number[];
}

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
  $components: Observable<ByComponent[]>;
  count: Observable<number[]>;

  objects: ObjectsRefDict = {};

  constructor(
    private route: ActivatedRoute,
    private luCoreData: LuCoreDataService) {}

  ngOnInit() {
    this.$components = this.route.paramMap
      .pipe(map(this.mapRouteInfo),tap(this.tapRef.bind(this)),switchMap(this.loadDataObservable.bind(this)))
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

  tapRef(ref) {
    this.component_id = ref.id;
    this.page = ref.page;
    let comp_id_str = String(ref.id);
    if (component_names.hasOwnProperty(comp_id_str)) {
      this.component_name = component_names[ref.id];
    }
  }

  loadDataObservable(ref): Observable<ByComponent[]> {
    return this.luCoreData
      .getRevEntry<Rev_ComponentType>('component_types', ref.id)
      .pipe(
        tap(this.setPageCounters.bind(this)),
        tap(this.setObjects.bind(this)),
        map(this.processData.bind(this, ref)));
  }

  setObjects(data: Rev_ComponentType) {
    this.objects = data._embedded.objects;
  }

  setPageCounters(data: Rev_ComponentType) {
    let total = Object.keys(data.components).length;
    this.page_count = Math.ceil(total / this.page_size);
  }

  processData(ref, data: Rev_ComponentType) {
    let list: ByComponent[] = Object.entries(data.components).map(([a,b]) => {
      return {
        id: Number(a),
        lots: b.lots,
      }
    });
    let sorted = list.sort(this.sortObjectComponentRefs);
    let from = this.page_size * ref.page;
    let to = from + this.page_size;
    return sorted.slice(from, to);
  }


  sortObjectComponentRefs(a: ByComponent, b: ByComponent): number {
    let diff = Number(a.id) - Number(b.id);
    return diff;
    //return (diff == 0) ? a.id - b.id : diff;
  }

  getName(lot: number): string {
    let obj = this.objects[lot];
    return obj ? obj.name : "[unnamed]";
  }

}
