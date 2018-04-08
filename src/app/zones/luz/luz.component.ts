import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-luz',
  templateUrl: './luz.component.html',
  styleUrls: ['./luz.component.css']
})
export class LuzComponent implements OnInit {

  @Input() path: string;
  selected_path: any;
  selected_path_point: number;
  zone: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getZone();
  }

  getZone(): void
  {
  	this.luJsonService.getJsonResource("maps/", this.path, "map")
  	  .subscribe(zone => this.zone = zone);
  }

  selectPath(path: any)
  {
    this.selected_path = path;
    this.selected_path_point = undefined;
  }

  selectPathPoint(point: number)
  {
    this.selected_path_point = point;
  }

}
