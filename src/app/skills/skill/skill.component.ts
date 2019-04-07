import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { LuJsonService } from '../../services';
import { DB_SkillBehavior } from '../../cdclient';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  _skill: Observable<DB_SkillBehavior>;

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService) { }

  ngOnInit() {
    this._skill = this.route.paramMap.pipe(
      map(map => +map.get('id')),
      switchMap(id => this.luJsonService.getSkill(id))
    );
  }
}
