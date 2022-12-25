import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Rev_CooldownGroup } from '../../../../defs/api';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-cooldowngroup-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class CooldownGroupDetailComponent {
  $id: Observable<number>;
  $cooldowngroup: Observable<Rev_CooldownGroup>;

  constructor(private luCoreData: LuCoreDataService, route: ActivatedRoute) {
    this.$id = route.paramMap.pipe(map(params => +params.get('id')));
    this.$cooldowngroup = this.$id.pipe(switchMap(id =>
      this.luCoreData.getRevEntry<Rev_CooldownGroup>("skills/cooldowngroups", id)
    ));
  }
}
