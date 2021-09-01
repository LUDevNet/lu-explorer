import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../../services';
import { LevelFileRef } from '../lvl-file/lvl-file.component';


@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent implements OnInit {

  scenes: LevelFileRef[];
  zone: any;
  sc_id: number;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private luJsonService: LuJsonService
  ) { }

  ngOnInit() {
    this.getZone();
  }

  getZone(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.luJsonService.getZone(this.id)
      .subscribe(zone => { this.zone = zone; this.getZoneData(zone.zoneName); });
  }

  toRef(sc: any, dir: string): LevelFileRef {
    return { name: sc.name, path: (dir + sc.filename) }
  }

  getZoneData(file: string): void {
    let dir = file.substring(0, file.lastIndexOf("/") + 1);
    this.sc_id = +this.route.snapshot.paramMap.get('sc');
    this.luJsonService.getJsonResource("maps/", file, "map")
      .subscribe(zone => this.scenes = zone.scenes
        .filter(sc => sc.id === this.sc_id).map(sc => this.toRef(sc, dir)));
  }

}
