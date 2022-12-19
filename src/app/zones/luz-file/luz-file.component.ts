import { Component, ElementRef, Injectable, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as leaflet from "leaflet";

import { LuCoreDataService } from '../../services';
import { Position, Quaternion, Vector3f } from '../../../defs/zone';

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

  path_version: number;

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
  map_description: string;
  map_filename: string;
  map_name: string;
  paths: LUZ_File_Path[];
  revision: number;
  scenes: any[];
  something: string,
  spawnpoint: Position;
  transitions: any[];
  version: number;
  world_id: number;
};

const PATH_TYPE_NAMES = [
  "NPCs",
  "Platforms",
  "Property Boundaries",
  "Cameras",
  "Spawners",
  "Build Areas",
  "Race Tracks",
  "Rails"
]

@Injectable()
export class LuzService {
  luz: LUZ_File;
}

@Component({
  selector: 'app-luz-file',
  templateUrl: './luz-file.component.html',
  styleUrls: ['./luz-file.component.css'],
  providers: [LuzService]
})
export class LuzFileComponent {
  $luz: Observable<LUZ_File>;
  luz: LUZ_File;
  @Input() width: number;
  @Input() height: number;
  private map: leaflet.Map;
  private iconCache: { [key: string]: leaflet.Icon } = {};
  private layerGroups: { [key: string]: any } = {};

  @ViewChild("map") mapElem: ElementRef;

  constructor(public route: ActivatedRoute, private router: Router, private luCoreData: LuCoreDataService, private luzService: LuzService) { }

  @Input() set path(value: string) {
    this.getZone(value);
  }

  getZone(path: string) : void {
    this.$luz = this.luCoreData.getMap<LUZ_File>(path);
  }

  getIcon(path: string) {
    if (!this.iconCache[path]) {
      this.iconCache[path] = leaflet.icon({
        iconUrl: "/lu-res/textures/"+path+".png",
        iconSize: [48, 48],
        iconAnchor: [24, 24]
      });
    }
    return this.iconCache[path];
  }

  ngAfterViewInit() {
    this.$luz.subscribe(this.onLuz);
  }

  onLuz = (luz) => {
    this.luz = luz;
    this.luzService.luz = luz;

    const LUCRS = leaflet.Util.extend({}, leaflet.CRS.Simple, {
      transformation: leaflet.transformation(-1.25 / this.width, 128, -1.25 / this.width, 128),

      scale: (zoom) => {
        let width;
        let height;
        if (this.width > 3) {
          width = Math.floor(this.width * 0.3 * (zoom+1));
        } else {
          width = Math.ceil(this.width * 0.3 * (zoom+1));
        }
        if (this.height > 3) {
          height = Math.floor(this.height * 0.3 * (zoom+1));
        } else {
          height = Math.ceil(this.height * 0.3 * (zoom+1));
        }
        return width;
      },

      zoom: function(scale) {
        return scale - 1;
      },
    });

    this.map = leaflet.map(this.mapElem.nativeElement, {
      center: [0, 0],
      zoom: 0,
      crs: LUCRS,
    });

    const upperLeft = leaflet.latLng(102.4*this.width, 102.4*this.height);
    const lowerRight = leaflet.latLng(-102.4*this.width, -102.4*this.height);
    const mapFilename = this.luz.map_filename.substring(0, this.luz.map_filename.lastIndexOf("."));

    const tiles = new leaflet.TileLayer("/lu-res/maps/minimaps/"+ mapFilename +"/zoom_{z}/image_{tileId}.png", {
      minZoom: 0,
      maxZoom: 16,
      minNativeZoom: 0,
      maxNativeZoom: 2,
      attribution: "Test",
      bounds: leaflet.latLngBounds(lowerRight, upperLeft).pad(-0.1),
      tileId: (data) => {
        let width;
        let height;
        if (this.width > 3) {
          width = Math.floor(this.width * 0.3 * (data.z+1));
        } else {
          width = Math.ceil(this.width * 0.3 * (data.z+1));
        }
        if (this.height > 3) {
          height = Math.floor(this.height * 0.3 * (data.z+1));
        } else {
          height = Math.ceil(this.height * 0.3 * (data.z+1));
        }
        const area = width * height;
        return `${(data.x + data.y * width) % area + 1}`.padStart(4, "0");
      }
    } as leaflet.TileLayerOptions );
    tiles.addTo(this.map);

    let Position = leaflet.Control.extend({
      _container: null,
      options: {
        position: "bottomleft"
      },

      onAdd: function (map) {
        var latlng = leaflet.DomUtil.create("div", "mouseposition");

        map.addEventListener("mousemove", (event: leaflet.LeafletMouseEvent) => {
          let lat = Math.round(event.latlng.lat * 1000) / 1000;
          let lng = Math.round(event.latlng.lng * 1000) / 1000;
          latlng.innerHTML = "X, Z: " + lng + " " + lat;
        });
        return latlng;
      },
    });

    let positionControl = new Position();
    this.map.addControl(positionControl);

    leaflet.control.scale({ imperial: false }).addTo(this.map);

    let DebugGrid = leaflet.GridLayer.extend({
      createTile: function (coords) {
        const tile = document.createElement("div");
        tile.style.outline = "1px solid green";
        tile.style.fontWeight = "bold";
        tile.style.fontSize = "14pt";
        tile.innerHTML = [coords.z, coords.x, coords.y].join("/");
        return tile;
      },
    });

    let debugGrid = new DebugGrid();
    //this.map.addLayer(debugGrid);

    const origin = leaflet.marker([0, 0], {icon: this.getIcon("ui/minimap/pet_dig")});
    origin.bindTooltip("Origin");

    const ul = leaflet.marker(upperLeft, {icon: this.getIcon("ui/minimap/pet_dig")});
    ul.bindTooltip("Upper Left");

    const lr = leaflet.marker(lowerRight, {icon: this.getIcon("ui/minimap/pet_dig")});
    lr.bindTooltip("Lower Right");

    this.layerGroups["Debug"] = [debugGrid, origin, ul, lr];

    const spawnpoint = leaflet.marker([this.luz.spawnpoint.pos.z, this.luz.spawnpoint.pos.x], {icon: this.getIcon("ui/minimap/teammate")});
    spawnpoint.bindTooltip("Spawnpoint");
    spawnpoint.addTo(this.map);

    let pathLayerGroups = [[], [], [], [], [], [], [], []];

    for (const path of this.luz.paths) {
      pathLayerGroups[path.type].push(this.displayPath(path));
    }

    for (let i = 0; i < pathLayerGroups.length; i++) {
      this.layerGroups[`Paths: ${PATH_TYPE_NAMES[i]}`] = pathLayerGroups[i];
    }

    let layerMaps = {};
    for (const key in this.layerGroups) {
      layerMaps[key] = leaflet.layerGroup(this.layerGroups[key]);
      if (key != "Debug") {
        layerMaps[key].addTo(this.map);
      }
    }
    leaflet.control.layers(null, layerMaps).addTo(this.map);
  }

  displayPath(path: any) {
    let color: string;
    switch (path.type) {
      case 0: {
        color = "magenta";
        break;
      }
      case 1: {
        color = "orange";
        break;
      }
      case 3: {
        color = "maroon";
        break;
      }
      case 6: {
        color = "cyan";
        break;
      }
      case 7: {
        color = "white";
        break;
      }
      default: {
        color = "blue";
      }
    }
    let layer;
    if (path.type == 0 || path.type == 3 || path.type == 7) {
      let coords = [];
      for (const waypoint of path.waypoints) {
        coords.push([waypoint.pos.z, waypoint.pos.x]);
      }
      layer = leaflet.polyline(coords, {color: color});
    } else if (path.type == 2 || path.type == 5) {
      let coords = [];
      for (const waypoint of path.waypoints) {
        coords.push([waypoint.z, waypoint.x]);
      }
      layer = leaflet.polygon(coords);
    } else if (path.type == 4) {
      let waypoints = [];

      let icon = this.iconForLot(path.spawned_lot);

      for (let i = 0; i < path.waypoints.length; i++) {
        const waypoint = path.waypoints[i];
        const marker = leaflet.marker([waypoint.pos.pos.z, waypoint.pos.pos.x], {icon: this.getIcon(icon)});
        marker.bindTooltip(path.name);
        marker.on("click", function(e) { router.navigate(["paths", path.name, i], { relativeTo: route }); });
        waypoints.push(marker);
      }
      this.layerGroups["Waypoints: "+path.name] = waypoints;
      layer = leaflet.layerGroup(waypoints);
    } else {
      let coords = [];
      for (const waypoint of path.waypoints) {
        coords.push([waypoint.pos.pos.z, waypoint.pos.pos.x]);
      }
      layer = leaflet.polyline(coords, {color: color});
    }
    layer.bindTooltip(path.name);
    const router = this.router;
    const route = this.route;
    layer.on("click", function(e) { router.navigate(["paths", path.name], { relativeTo: route }); });
    layer.addTo(this.map);
    return layer;
  }

  iconForLot(lot) {
    switch (lot) {
      case 2305:
      case 12268:
        return "ui/missioncomics/wonderland/gnarled_forest/hud_icons/red_crate";
      case 3195:
        return "ui/inventory/pets/trike";
      case 3261:
        return "ui/inventory/pets/skunk";
      case 3396:
      case 12614:
      case 16018:
      case 16284:
        return "ui/inventory/misc/icy_rock";
      case 3646:
      case 7626:
        return "ui/inventory/hats/custom_flower_hat";
      case 4712:
      case 6351:
      case 9744:
        return "ui/achievements/darkling_strombie";
      case 4920:
      case 10039:
        return "ui/missioncomics/wonderland/forbidden_valley/hud_icons/mission_696";
      case 4921:
        return "ui/missioncomics/wonderland/avant_gardens/task_icons/collectmission_470";
      case 5635:
        return "ui/inventory/pets/dobberman_dog";
      case 5636:
        return "ui/inventory/pets/bison";
      case 5637:
        return "ui/inventory/pets/robot_dog";
      case 5639:
        return "ui/inventory/pets/dragon_asian";
      case 5641:
        return "ui/inventory/pets/dragon_european";
      case 5642:
        return "ui/inventory/pets/mantis";
      case 6253:
      case 6668:
      case 12585:
        return "ui/achievements/darkling_mech";
      case 6299:
        return "ui/missioncomics/wonderland/avant_gardens/task_icons/mission_1250";
      case 6359:
      case 6454:
      case 12575:
      case 14572:
        return "ui/achievements/spider_baby";
      case 6550:
      case 10378:
        return "ui/achievements/darkling_pirate";
      case 6720:
        return "ui/inventory/pets/warthog";
      case 6789:
      case 10379:
        return "ui/achievements/darkling_admiral";
      case 6806:
        return "ui/achievements/darkling_ape";
      case 6834:
        return "ui/inventory/models/smash_nim_ag_hedgehog-barrier";
      case 6946:
        return "ui/missioncomics/wonderland/avant_gardens/task_icons/rebuild_wall_325_task";
      case 7638:
        return "ui/inventory/pets/goat";
      case 7680:
        return "ui/achievements/imagination_reward";
      case 7805:
      case 11225:
      case 11226:
        return "ui/missioncomics/wonderland/forbidden_valley/task_icons/mission_513";
      case 7815:
      case 10380:
        return "ui/missioncomics/wonderland/forbidden_valley/hud_icons/mission_498";
      case 7816:
      case 10381:
        return "ui/missioncomics/wonderland/forbidden_valley/hud_icons/mission_497";
      case 8552:
        return "ui/missioncomics/wonderland/forbidden_valley/hud_icons/mission_594";
      case 8571:
        return "ui/missioncomics/wonderland/forbidden_valley/hud_icons/mission_764";
      case 9276:
        return "ui/missioncomics/wonderland/nimbus_station/hud_icons/mission_863";
      case 9308:
        return "ui/inventory/pets/crab";
      case 10425:
        return "ui/achievements/statue_mantis";
      case 10425:
        return "ui/achievements/statue_mantis";
      case 10427:
        return "ui/achievements/statue_dragon";
      case 10428:
        return "ui/achievements/statue_horse";
      case 11212:
        return "auramar/ui/achievements/cp_stromling";
      case 11214:
        return "auramar/ui/achievements/cp_spiderling";
      case 11215:
        return "auramar/ui/achievements/cp_pirate";
      case 11216:
        return "auramar/ui/missioncomics/crux_prime/task_icons/mission_980";
      case 11217:
        return "auramar/ui/achievements/cp_gorilla";
      case 11218:
        return "auramar/ui/achievements/cp_ronin";
      case 11219:
        return "auramar/ui/achievements/cp_cavalry";
      case 12000:
        return "ui/missioncomics/nexus_tower/hud_icons/mission_974";
      case 12002:
        return "auramar/ui/achievements/cp_skullkin_engineer";
      case 12004:
        return "auramar/ui/achievements/cp_skullkin_pitboss";
      case 12005:
        return "ui/missioncomics/nexus_tower/task_icons/mission_967";
      case 12125:
        return "ui/missioncomics/nexus_tower/task_icons/mission_972";
      case 12168:
        return "ui/missioncomics/nexus_tower/task_icons/mission_970";
      case 12171:
        return "ui/missioncomics/nexus_tower/task_icons/mission_971";
      case 12189:
        return "auramar/ui/missioncomics/crux_prime/task_icons/mission_1275";
      case 12266:
      case 13069:
        return "nexustower/ui/inventory/misc/sentinel_crate";
      case 12542:
        return "ui/missioncomics/wonderland/ve_instance/task_icons/mission_1217";
      case 12545:
        return "ui/missioncomics/nexus_tower/hud_icons/mission_979";
      case 13569:
        return "nexustower/ui/achievements/mr_ree";
      case 13995:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/bone_wolf";
      case 14024:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_grunt";
      case 14025:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_corporal";
      case 14026:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_sergeant";
      case 14028:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_specialist";
      case 14029:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_poisoner";
      case 14044:
        return "nexustower/ui/inventory/misc/venturecratedisguise";
      case 14260:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/earth_flower";
      case 14261:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/fire_flower";
      case 14262:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/ice_flower";
      case 14263:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/lightning_flower";
      case 14375:
        return "nexustower/ui/inventory/misc/petegg";
      case 14380:
        return "freetrial/ui/missions/task_icons/plungerguntarget";
      case 14416:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/siege_shield";
      case 14429:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/siege_ladder";
      case 14491:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_recruit";
      case 14586:
        return "freetrial/ui/missions/task_icons/pidgeons_hud";
      case 14673:
        return "ui/achievements/shark_attack";
      case 16040:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/weapon_crate";
      case 16281:
        return "ng_ninjago/ui/inventory/missioncomics/task_icons/skeleton_coffins";
      default:
        return "ui/minimap/miniboss";
    }
  }
}
