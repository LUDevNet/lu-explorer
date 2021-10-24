import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LuJsonService, LuLocaleService } from '../../services';
import { component_names } from '../../../defs/components';
import { APIObject } from '../../util/services/lu-json.service';
import { Locale_Objects } from '../../../defs/locale';

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

  constructor(private route: ActivatedRoute,
  	private luJsonService: LuJsonService,
    private luLocaleService: LuLocaleService) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe(this.getObject.bind(this));
  }

  getObject(map: ParamMap):void {
    this.component_id = map.has('component') ? +map.get('component') : undefined;
  	let id = +map.get('id');
    this.object_id = id;
  	this.luJsonService.getObject(id).subscribe(object => this.loadObject(object));
    this.luLocaleService.getLocaleEntry("Objects", id).subscribe(entry => this.objectLocale = entry);
  }

  loadObject(object: APIObject): void
  {
    if (object && !this.component_id && object.hasOwnProperty('components')) {
      let keys = Object.keys(object.components);
      if (keys.length > 0) {
        this.component_id = +keys[0];
      }
    }

    this.object = object;
  }

  getName(id: number)
  {
    return component_names[id];
  }

}
