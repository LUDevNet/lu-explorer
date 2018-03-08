import { Component, OnInit } from '@angular/core';
import { Zone } from '../zone';
import { ZONES } from '../mock-zones';
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

  zones: Zone[];

  selectedZone: Zone;

  onSelect(zone: Zone): void {
    this.selectedZone = zone;
  }

  getZones(): void {
    this.luJsonService.getZones().subscribe(zones => this.zones = zones);
  }

}
