import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../lu-json.service';
import { component_names } from '../components';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  object: any;
  component_id: number;

  constructor(private route: ActivatedRoute,
  	private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.getObject();
  }

  getObject():void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.luJsonService.getObject(id).subscribe(object => this.loadObject(object));
  }

  loadObject(object: any): void
  {
    this.object = object;
  }

  selectComponent(id: number)
  {
    this.component_id = id;
  }

  getName(id: number)
  {
    console.log("Test");
    return component_names[id];
  }
}
