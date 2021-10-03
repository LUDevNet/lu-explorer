import { Component, OnInit } from '@angular/core';
import { DB_ZoneTable } from '../../cdclient';
import { LuJsonService } from '../../services';

@Component({
  selector: 'app-zone-index',
  templateUrl: './zone-index.component.html',
  styleUrls: ['./zone-index.component.css']
})
export class ZoneIndexComponent implements OnInit {

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.getZones()
  }

  zones: DB_ZoneTable[];

  getZones(): void {
    this.luJsonService.getZones().subscribe(zones => this.zones = zones);
  }

}
