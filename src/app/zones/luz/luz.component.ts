import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

const mapHScale = 128;
const mapVScale = 128;

@Component({
  selector: 'app-luz',
  templateUrl: './luz.component.html',
  styleUrls: ['./luz.component.css']
})
export class LuzComponent implements OnInit {

  _path: string;
  selected_path: any;
  selected_path_point: number;
  zone: any;
  @Input('zone-ref') zoneRef: any;

  constructor(private luJsonService: LuJsonService) { }

  @Input() set path(value: string) {
    this.getZone(value);
  }

  ngOnInit() {}

  getZone(path: string): void
  {
  	this.luJsonService.getJsonResource("maps/", path, "map")
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

  toPolygon(selected_path: any) {
    var points = selected_path.waypoints;
    let type = selected_path.type;

    switch (type) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 6:
      case 7:
        points = points.map(data => data.pos);
        break;
      case 2:
      default:
        break;
    }
    return points.map(pos => pos.x + ',' + (-pos.z)).join(' ');
  }

  toViewBox(zone) {
    return `0 0 ${zone.widthInChunks * mapHScale} ${zone.heightInChunks * mapVScale}`;
  }

  toTranslate(zone) {
    return `translate(${zone.widthInChunks * mapHScale / 2} ${zone.heightInChunks * mapVScale / 2})`;
  }

}
