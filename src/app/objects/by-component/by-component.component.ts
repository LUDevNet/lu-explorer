import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../../lu-json.service';
import { component_names } from '../../components';

@Component({
  selector: 'app-by-component',
  templateUrl: './by-component.component.html',
  styleUrls: ['./by-component.component.css']
})
export class ObjectsByComponentComponent implements OnInit {

  component_id: number = -1;
  component_name: string = "[Unnamed]";
  objects: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.processRouteChange.bind(this));
  }

  processRouteChange(map: any) {
    let comp_id_str = map.get('component');
    this.component_id = +comp_id_str;
    if (component_names.hasOwnProperty(comp_id_str)) {
      this.component_name = component_names[this.component_id];
    }

    this.luJsonService
      .getObjectComponent(this.component_id)
      .subscribe(this.processObjectComponent.bind(this))
  }

  processObjectComponent(data: any): void {
    this.objects = data.sort(this.sortObjectComponentRefs);
  }

  sortObjectComponentRefs(a,b) {
    return a.id - b.id;
  }

}
