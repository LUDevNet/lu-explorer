import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuCoreDataService } from '../../services';
import { LUZ_File } from '../luz-file/luz-file.component';


@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent implements OnInit {

  scenes: string[];
  zone: any;
  sc_id: number;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private luCoreData: LuCoreDataService,
  ) { }

  ngOnInit() {
    this.getZone();
  }

  getZone(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.luCoreData.getSingleTableEntry("ZoneTable", this.id)
      .subscribe(zone => { this.zone = zone; this.getZoneData(zone.zoneName); });
  }

  toRef(sc: any, dir: string): any {
    return { name: sc.name, path: (dir + sc.filename) }
  }

  getZoneData(file: string): void {
    let dir = file.substring(0, file.lastIndexOf("/") + 1);
    this.sc_id = +this.route.snapshot.paramMap.get('sc');


    this.luCoreData.getMap<LUZ_File>(file)
      .subscribe(zone => this.scenes = zone.scenes
        .filter(sc => sc.id === this.sc_id).map(sc => this.toRef(sc, dir)));
  }

}
