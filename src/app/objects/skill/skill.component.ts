import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';
import { LuResService } from '../../lu-res.service';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class ObjectSkillComponent implements OnInit, OnChanges {

  @Input() oskills: any[];
  @Input() id: any;
  skills: any = {};

  constructor(
    private luJsonService: LuJsonService,
    private luResService: LuResService) { }

  ngOnInit() {
  	this.getComponent();
  	this.skills = {};
  }

  ngOnChanges() {
    this.getComponent();
    this.skills = {};
  }

  getComponent(): void {
  	for (let skillID in this.oskills)
    {
      let sk = this.oskills[skillID];
      this.luJsonService.getSkill(sk.skillID)
        .subscribe(skill => this.skills[sk.skillID] = skill);
    }
  }

  image(path: string): string {
    return this.luResService.getResolvedResUrl(path);
  }

  bgImage(path:string) : string {
    return "url(" + this.image(path) + ")";
  }

}
