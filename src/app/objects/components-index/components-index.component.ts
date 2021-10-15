import { Component, OnInit } from '@angular/core';

import { LuJsonService, LuLocaleService } from '../../services';
import { component_names } from '../../../defs/components';

@Component({
  selector: 'app-components-index',
  templateUrl: './components-index.component.html',
  styleUrls: ['./components-index.component.css']
})
export class ObjectComponentsIndexComponent implements OnInit {

  components: any;
  component_names: any;

  constructor(private luJsonService: LuJsonService,private luLocaleService: LuLocaleService) { }

  ngOnInit() {
    alert("FIXME: components-index");
    //this.luJsonService
    //  .getObjectComponents()
    //  .subscribe(this.processObjectComponents.bind(this));
  }

  processObjectComponents(data: any) {
    this.components = data['components'].sort(this.sortCompIds.bind(this));
  }

  sortCompIds(a,b): number {
    return (+a) - (+b);
  }

  getCompName(id: string) {
    if (component_names.hasOwnProperty(id)) {
      return component_names[id];
    } else {
      return id;
    }
  }
}
