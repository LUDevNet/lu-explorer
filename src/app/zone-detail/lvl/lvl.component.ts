import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../lu-json.service';


@Component({
  selector: 'app-lvl',
  templateUrl: './lvl.component.html',
  styleUrls: ['./lvl.component.css']
})
export class LvlComponent implements OnInit {

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
    console.log(typeof(id));
    let mask = Math.pow(2,32);
    let prefix = String(id % mask);
    var flags = [];
    var m = Math.floor(id / mask);
    for (var i = 0; i < 32; i++) {
      console.log(i, ":", m);
      if ((m % 2) == 1) {
        console.log("F:", i);
        flags.push(i);
      }
      if (m < 2) break;
      m = Math.floor(m / 2);
    }
    if (flags.length == 0) return prefix;
    else return prefix + " (" + flags.map(x => String(x)).join(', ') + ")";
  }

}
