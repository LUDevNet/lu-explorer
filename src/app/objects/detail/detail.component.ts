import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService, LuLocaleService } from '../../services';
import { component_names } from '../../../defs/components';
import { APIObject } from '../../util/services/lu-json.service';

@Component({
  selector: 'app-object-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ObjectDetailComponent implements OnInit {

  object?: APIObject;
  object_id: number;
  objectLocale: any;
  component_id: number;

  constructor(private route: ActivatedRoute,
  	private luJsonService: LuJsonService,
    private luLuLocaleService: LuLocaleService) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe(this.getObject.bind(this));
  }

  getObject(map: any):void {
    if (map.has('component')) {
      this.component_id = +map.get('component');
    } else {
      this.component_id = undefined;
    }
  	let id = +map.get('id');
    this.object_id = id;
  	this.luJsonService.getObject(id).subscribe(object => this.loadObject(object));
    this.luLuLocaleService.getLocaleEntry("Objects", id).subscribe(entry => this.objectLocale = entry);
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
