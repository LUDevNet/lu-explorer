import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuCoreDataService } from '../../services';
import { DB_ZoneTable } from '../../../defs/cdclient';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const SIGNAGE_ZONES = [1001, 1100, 1149, 1150, 1151, 1200, 1201, 1250, 1251, 1260, 1300, 1350, 1351, 1400, 1450, 1451, 1600, 1800, 1900, 2000];

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent{

  zoneId$ = this.route.paramMap.pipe(
    map(paramMap => +paramMap.get('id'))
  );
  zone$: Observable<DB_ZoneTable> = this.zoneId$.pipe(
    switchMap(zoneId => this.coreData.getSingleTableEntry("ZoneTable", zoneId))
  );
  signage$ = this.zoneId$.pipe(
    map(zoneId => SIGNAGE_ZONES.includes(zoneId) ? ({
      "backgroundImage": `url('/lu-res/textures/ui/signage/${zoneId}.png')`
    }) : { display: 'none' })
  )

  constructor(
    private route: ActivatedRoute,
    private coreData: LuCoreDataService,
  ) { }
}
