import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuCoreDataService } from '../../services';
import { LUZ_File } from '../luz-file/luz-file.component';
import { Observable, combineLatest } from 'rxjs';
import { DB_ZoneTable } from '../../../defs/cdclient';
import { map, switchMap } from 'rxjs/operators';

type Ref = { name: string, path: string };


@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent {

  scId$: Observable<number> = this.route.paramMap.pipe(map(params => +params.get('sc')));
  id$: Observable<number> = this.route.paramMap.pipe(map(params => +params.get('id')));
  zone$: Observable<DB_ZoneTable> = this.id$.pipe(switchMap(id => this.luCoreData.getSingleTableEntry("ZoneTable", id)));
  luzPath$ = this.zone$.pipe(map(zone => zone.zoneName));
  luzDir$ = this.luzPath$.pipe(map(file => file.substring(0, file.lastIndexOf("/") + 1)));
  luz$ = this.luzPath$.pipe(switchMap(file => this.luCoreData.getMap<LUZ_File>(file)));
  scenes$: Observable<Ref[]> = combineLatest([this.luzDir$, this.luz$, this.scId$]).pipe(
    map(([dir, zone, sc_id]) => {
      return zone.scenes.filter(sc => sc.id === sc_id).map(sc => this.toRef(sc, dir))
    })
  )

  constructor(
    private route: ActivatedRoute,
    private luCoreData: LuCoreDataService,
  ) { }

  toRef(sc: any, dir: string): Ref {
    return { name: sc.name, path: (dir + sc.filename) }
  }
}
