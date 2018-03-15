import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class ObjectSkillComponent implements OnInit {

  @Input() oskills: any[];
  @Input() id: any;
  skills: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getComponent();
  	this.skills = [];
  }

  getComponent(): void
  {
  	for (let skillID in this.oskills)
    {
      let sk = this.oskills[skillID];
      this.luJsonService.getSkill(sk.skillID)
        .subscribe(skill => this.skills[sk.skillID] = skill);
    }
  }

}
