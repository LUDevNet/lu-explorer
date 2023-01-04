import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LuCoreDataService } from '../../services';
import { DB_ZoneTable } from '../../../defs/cdclient';

const SIGNAGE_ZONES = [1001, 1100, 1149, 1150, 1151, 1200, 1201, 1250, 1251, 1260, 1300, 1350, 1351, 1400, 1450, 1451, 1600, 1800, 1900, 2000];

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit {

  @Input() zone: DB_ZoneTable;
  locale: any;
  zone_id: number;

  constructor(
    private route: ActivatedRoute,
    private coreData: LuCoreDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.zone_id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(map => this.getZone(+map.get('id')));
  }

  zoneGif() {
    if (SIGNAGE_ZONES.includes(this.zone_id)) {
      return `textures/ui/signage/${this.zone_id}.gif`;
    }
  }

  getSignage(): { [klass: string]: any } {
    return (SIGNAGE_ZONES.includes(this.zone_id)) ? {
      "backgroundImage": `url('/lu-res/textures/ui/signage/${this.zone_id}.png')`
    } : { display: "none" };
  }

  getZone(id: number): void {
    this.zone_id = id;
    this.coreData.getSingleTableEntry("ZoneTable", id).subscribe(zone => this.zone = zone);
  }
}
