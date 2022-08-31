import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LuCoreDataService, LuJsonService, LuLocaleService } from '../../services';
import { component_names } from '../../../defs/components';
import { APIObject } from '../../util/services/lu-json.service';
import { Locale_Objects } from '../../../defs/locale';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rev_Objects } from '../../../defs/api';

@Component({
  selector: 'app-object-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ObjectDetailComponent implements OnInit {

  object?: APIObject;
  object_id: number;
  objectLocale: Locale_Objects;
  component_id: number;
  component: string;
  $rev: Observable<Rev_Objects>;

  constructor(private route: ActivatedRoute,
    private luJsonService: LuJsonService,
    private luLocaleService: LuLocaleService,
    private luCoreDataService: LuCoreDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.getObject.bind(this));
  }

  getObject(map: ParamMap): void {
    this.component = map.get('component');
    this.component_id = map.has('component') ? +this.component : undefined;
    let id = +map.get('id');
    this.object_id = id;
    this.$rev = this.luCoreDataService.getRevEntry("objects", id);
    this.luJsonService.getObject(id).subscribe(object => this.loadObject(object));
    this.luLocaleService.getLocaleEntry("Objects", id).subscribe(entry => this.objectLocale = entry);
  }

  loadObject(object: APIObject): void {
    const special = ["used-by"].includes(this.component);
    if (object && !special && !this.component_id && object.hasOwnProperty('components')) {
      let keys = Object.keys(object.components);
      if (keys.length > 0) {
        this.component_id = +keys[0];
      }
    }

    this.object = object;
  }

  getName(id: number) {
    return component_names[id];
  }
}
