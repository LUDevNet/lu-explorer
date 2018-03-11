import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LuJsonService } from '../lu-json.service';
import { SkillBehavior } from '../cdclient';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: SkillBehavior;

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.getSkill();
  }

  getSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.luJsonService.getSkill(id)
      .subscribe(skill => this.skill = skill);
  }

}
