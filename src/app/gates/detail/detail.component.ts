import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Rev_GateVersion } from '../../../defs/api';
import { DB_Icons, DB_MissionTasks } from '../../../defs/cdclient';
import { Locale_Mission } from '../../../defs/locale';
import { mapRec, mapToDict, mapToMultiDict, pick, recToSet, values } from '../../../defs/rx';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-gate-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class GateDetailComponent implements OnInit {
  $id: Observable<string>;

  $data: Observable<Rev_GateVersion | null>;
  $objectIds: Observable<number[]>;

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    const cd = this.luCoreData;
    this.$id = this.route.paramMap.pipe(map(p => p.get('id')));
    this.$data = this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_GateVersion>('gate-versions', id)));
    this.$objectIds = this.$data.pipe(map(d => d.objects));
  }
}
