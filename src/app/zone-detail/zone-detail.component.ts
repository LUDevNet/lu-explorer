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

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService,
    private location: Location
  ) { }

  ngOnInit() {
  	this.getZone();
  }

  getZone(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.luJsonService.getZone(id)
      .subscribe(zone => this.zone = zone);
  }

  goBack(): void {
    this.location.back();
  }

}
