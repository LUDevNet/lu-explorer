import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../lu-json.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent implements OnInit {

  object: any;
  skills: any[];

  constructor(private route: ActivatedRoute,
  	private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.getObject();
    this.skills = Array();
  }

  getObject():void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.luJsonService.getObject(id).subscribe(object => this.loadObject(object));
  }

  loadObject(object: any): void
  {
    this.object = object;
    for (let skillID in object.skills)
    {
      let sk = object.skills[skillID];
      this.luJsonService.getSkill(sk.skillID).subscribe(skill => this.loadSkill(sk, skill));
    }
  }

  loadSkill(skill: any, data: any): void
  {
    this.skills[skill.skillID] = data;
  }

}
