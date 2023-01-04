import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LuCoreDataService } from '../../services';

interface Object {
  data: Observable<any>,
  obj: any,
}

export class LvlChunk1000 {
  _type = 1000;

  version: number;
  value_1: number;
}

export class LvlChunk2000 {
  _type = 2000;
}

export interface LvlChunk {
  _type: 1000 | 2000 | 2001 | 2002;

  // 1000
  version?: number;
  value_1?: number;

  // 2000
  floats?: any[];
  ids?: any[];
  sky?: string[];

  // 2001
  objects?: any[];
}
export interface LvlFile {
  chunks: LvlChunk[];
}

@Component({
  selector: 'app-lvl-file',
  templateUrl: './lvl-file.component.html',
  styleUrls: ['./lvl-file.component.css']
})
export class LvlFileComponent implements OnInit {

  @Input() ref: any;
  $scene: Observable<LvlFile>;
  selected_object: any;
  selected_object_data: Observable<any>;
  obj_id: number | undefined;
  zone_id: number;
  scene_id: number;

  constructor(
    private route: ActivatedRoute,
    private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.getScene();
    this.route.paramMap.subscribe(this.selectObject.bind(this))
  }

  getScene(): void {
    this.$scene = this.luCoreData.getMap(this.ref.path);
  }

  selectObject(map: any) {
    console.log(map);
    this.zone_id = +map.get('id');
    this.scene_id = +map.get('sc');
    if (map.has('obj')) {
      this.obj_id = +map.get('obj');
    } else {
      this.obj_id = undefined;
    }
  }

  hasObj(objects): any {
    for (let element of objects) {
      if (element.id == this.obj_id) {
        return element;
      }
    }
  }

  loadObject(id: number, object: any) {

  }

  objID(id) {
    let mask = Math.pow(2, 32);
    let prefix = String(id % mask);
    var flags = [];
    var m = Math.floor(id / mask);
    for (var i = 0; i < 32; i++) {
      if ((m % 2) == 1) {
        flags.push(i);
      }
      if (m < 2) break;
      m = Math.floor(m / 2);
    }
    if (flags.length == 0) return prefix;
    else return prefix + " (" + flags.map(x => String(x)).join(', ') + ")";
  }

}
