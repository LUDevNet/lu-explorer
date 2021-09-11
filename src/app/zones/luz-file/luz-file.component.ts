import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../../services';
import { Position, Quaternion, Vector3f } from '../../zone';

const mapHScale = 128;
const mapVScale = 128;


export interface LUZ_File_Position {
  pos?: Vector3f;
  rot?: Quaternion;
  x?: number;
  y?: number;
  z?: number;
}

export interface LUZ_File_Waypoint {
  config: {[key: string]: any};
  pos: LUZ_File_Position; // FIXME

  // FIXME: is this right?
  x?: number;
  y?: number;
  z?: number;

  // Moving Platform
  lock_player?: any;
  speed?: any;
  wait?: any;
  depart_sound?: any;
  arrive_sound?: any;

  // Camera
  time?: any;
  value_1?: number;
  value_2?: number;
  value_3?: number;
  value_4?: number;
  value_5?: number;
  tension?: any;
  continuity?: any;
  bias?: any;
}

export interface LUZ_File_Path {
  type: number,
  name: string,
  travel_sound: string,
  waypoints: LUZ_File_Waypoint[];

  behavior?: number;

  // Property
  value_1?: number;
  value_2?: any;
  price?: number;
  rental_time?: number;
  zone?: string;
  description?: string;
  clone_limit?: number;
  reputation_multiplier?: number;
  rental_time_unit?: any;
  req_achievement?: number;
  player_coord?: Vector3f;
  max_building_height?: number;

  // Camera
  next_path?: string;

  // Spawner
  spawned_lot?: any;
  respawn_time?: any;
  max_to_spawn?: any;
  number_to_maintain?: any;
  object_id?: any;
  activate_on_load?: any;
};
export interface LUZ_File {
  paths: LUZ_File_Path[];
};

@Component({
  selector: 'app-luz-file',
  templateUrl: './luz-file.component.html',
  styleUrls: ['./luz-file.component.css']
})
export class LuzFileComponent implements OnInit {

  _path: string;
  selected_path: LUZ_File_Path;
  selected_path_point: number;
  zone: any;
  zone_id: any;
  @Input('zone-ref') zoneRef: any;

  constructor(private route: ActivatedRoute, private luJsonService: LuJsonService) { }

  @Input() set path(value: string) {
    this.getZone(value);
  }

  ngOnInit() {
    this.zone_id = this.route.snapshot.params['id'];
  }

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
