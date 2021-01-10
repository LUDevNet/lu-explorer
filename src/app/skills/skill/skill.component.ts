import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { LuJsonService } from '../../services';
import { DB_SkillBehavior } from '../../cdclient';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  id: number;
  _skill: Observable<DB_SkillBehavior>;

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this._skill = this.route.paramMap.pipe(
      map(map => +map.get('id')),
      tap(id => {
        this.id = id;
        this.cd.detectChanges();
      }),
      switchMap(id => this.luJsonService.getSkill(id))
    );
  }
}
