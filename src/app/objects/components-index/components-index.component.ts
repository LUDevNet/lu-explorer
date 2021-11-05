import { Component, OnInit } from '@angular/core';

import { LuCoreDataService } from '../../services';
import { component_names } from '../../../defs/components';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rev_ComponentTypes } from '../../../defs/api';

@Component({
  selector: 'app-components-index',
  templateUrl: './components-index.component.html',
  styleUrls: ['./components-index.component.css']
})
export class ObjectComponentsIndexComponent implements OnInit {

  $components: Observable<number[]>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.$components = this.luCoreData.getRev<Rev_ComponentTypes>('component_types').pipe(map(x => x.components));
  }

  sortCompIds(a,b): number {
    return (+a) - (+b);
  }

  getCompName(id: number) {
    if (component_names.hasOwnProperty(id)) {
      return component_names[id];
    } else {
      return id;
    }
  }
}
