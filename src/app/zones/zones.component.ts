import { Component, OnInit } from '@angular/core';
import { ZoneDetail } from '../zone';
import { LuJsonService } from '../lu-json.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.getZones()
  }

  zones: ZoneDetail[];

  getZones(): void {
    this.luJsonService.getZones().subscribe(zones => this.zones = zones);
  }

}
