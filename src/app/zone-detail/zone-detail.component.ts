import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LuJsonService } from '../lu-json.service';
import { ZoneDetail } from '../zone';


@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.css']
})
export class ZoneDetailComponent implements OnInit {

  @Input() zone: ZoneDetail;
  locale: any;

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => this.getZone(+map.get('id')));
  }

  getZone(id: number): void {
    this.luJsonService.getZone(id).subscribe(zone => this.zone = zone);
  }

  goBack(): void {
    this.location.back();
  }

}
