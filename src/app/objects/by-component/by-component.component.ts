import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuCoreDataService } from '../../services';
import { component_names } from '../../../defs/components';
import { ObjectsRefDict, Rev_ComponentType } from '../../../defs/api';

interface ByComponent {
  id: number;
  lots: number[];
}

class RouteInfo {
  id: number;
  page: number

  constructor(map: ParamMap) {
    this.id = +map.get('component');
    this.page = +(map.get('page') || 0);
  }
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
    private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    const $routeInfo = this.route.paramMap.pipe(map((map) => new RouteInfo(map)));
    $routeInfo.subscribe((ref: RouteInfo) => {
      this.component_id = ref.id;
      this.component_name = component_names[ref.id] || "[Unnamed]";
      this.page = ref.page;
    });
    this.$components = $routeInfo.pipe(switchMap(this.loadDataObservable.bind(this)))
  }

  loadDataObservable(ref: RouteInfo): Observable<ByComponent[]> {
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

  processData(ref: RouteInfo, data: Rev_ComponentType): ByComponent[] {
    let list: ByComponent[] = Object.entries(data.components).map(([a, b]) => {
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
    return Number(a.id) - Number(b.id);
  }

  getName(lot: number): string {
    let obj = this.objects[lot];
    return obj ? obj.name : "[unnamed]";
  }
}
