import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LuJsonService } from '../../services';
import { ZoneDetail } from '../../zone';


@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit {

  @Input() zone: ZoneDetail;
  locale: any;
  zone_id: number;

  constructor(
    private route: ActivatedRoute,
    private luJsonService: LuJsonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.zone_id = -1;
    this.route.paramMap.subscribe(map => this.getZone(+map.get('id')));
  }

  zoneGif() {
    if ([1001, 1100, 1149, 1150, 1151, 1200, 1201, 1250, 1251, 1260, 1300, 1350, 1351, 1400, 1450, 1451, 1600, 1800, 1900, 2000].includes(this.zone_id)) {
      return `textures/ui/signage/${this.zone_id}.gif`;
    }
  }

  getZone(id: number): void {
    this.zone_id = id;
    this.luJsonService.getZone(id).subscribe(zone => this.zone = zone);
  }
}
