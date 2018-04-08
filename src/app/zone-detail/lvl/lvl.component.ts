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

}
