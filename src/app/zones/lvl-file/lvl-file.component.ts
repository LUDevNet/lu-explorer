import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../services';

@Component({
  selector: 'app-lvl-file',
  templateUrl: './lvl-file.component.html',
  styleUrls: ['./lvl-file.component.css']
})
export class LvlFileComponent implements OnInit {

  @Input() ref: any;
  scene: any;
  selected_object: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getScene();
  }

  getScene(): void
  {
    this.luJsonService.getJsonResource("maps/", this.ref.path, "map")
      .subscribe(scene => this.scene = scene);
  }

  selectObject(obj: any)
  {
    this.selected_object = obj;
  }

  objID(id) {
    let mask = Math.pow(2,32);
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
