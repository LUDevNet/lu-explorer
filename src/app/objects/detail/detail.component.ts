import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LuCoreDataService, LuJsonService, LuLocaleService } from '../../services';
import { component_names } from '../../../defs/components';
import { APIObject, Optional } from '../../util/services/lu-json.service';
import { Locale_Objects } from '../../../defs/locale';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rev_Objects } from '../../../defs/api';
import { DB_ComponentsRegistry, DB_mapIcon, DB_Objects, DB_ObjectSkills } from '../../../defs/cdclient';

@Component({
  selector: 'app-object-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ObjectDetailComponent implements OnInit {

  object_id: number;
  objectLocale: Locale_Objects;
  component_id: number;
  component: string;

  $rev: Observable<Rev_Objects>;

  $object: ReplaySubject<DB_Objects | undefined> = new ReplaySubject(1);
  $components: ReplaySubject<DB_ComponentsRegistry[]> = new ReplaySubject(1);
  $skills: ReplaySubject<DB_ObjectSkills[]> = new ReplaySubject(1);
  $icons: ReplaySubject<DB_mapIcon[]> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute,
    private luLocaleService: LuLocaleService,
    private luCoreDataService: LuCoreDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.getObject.bind(this));
    this.$components.subscribe(this.onComponentLoad.bind(this))
  }

  getObject(params: ParamMap): void {
    this.component = params.get('component');
    this.component_id = params.has('component') ? +this.component : undefined;
    let id = +params.get('id');
    this.object_id = id;
    this.$rev = this.luCoreDataService.getRevEntry("objects", id);

    this.luCoreDataService.getSingleTableEntry<DB_Objects>('Objects', id).subscribe(this.$object)
    this.luCoreDataService.getTableEntry<DB_ComponentsRegistry>('ComponentsRegistry', id).subscribe(this.$components)
    this.luCoreDataService.getTableEntry<DB_ObjectSkills>('ObjectSkills', id).subscribe(this.$skills)
    this.luCoreDataService.getTableEntry<DB_mapIcon>('mapIcon', id).subscribe(this.$icons)
    this.luLocaleService.getLocaleEntry("Objects", id).subscribe(entry => this.objectLocale = entry);
  }

  onComponentLoad(components: DB_ComponentsRegistry[]): void {
    const special = ["used-by"].includes(this.component);
    if (!special && !this.component_id) {
      if (components.length > 0) {
        this.component_id = components[0].component_type;
      }
    }
  }

  getName(id: number) {
    return component_names[id];
  }
}
