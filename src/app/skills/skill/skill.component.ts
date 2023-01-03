import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { DB_MissionTasks, DB_SkillBehavior } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';


interface Rev_Skill_Embedded {
  MissionTasks: { [key: number]: DB_MissionTasks }
}

interface Rev_Skill {
  mission_tasks: number[],
  objects: number[],
  // NOTE: this is actually item_sets_skill_set
  item_sets: number[],
  _embedded: Rev_Skill_Embedded,
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  id: number;
  _skill: Observable<DB_SkillBehavior>;
  $rev_skill: Observable<Rev_Skill>;

  constructor(
    private route: ActivatedRoute,
    private coreData: LuCoreDataService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    let $id = this.route.paramMap.pipe(
      map(map => +map.get('id')),
      tap(id => {
        this.id = id;
        this.cd.detectChanges();
      }));
    this._skill = $id.pipe(switchMap(id => this.coreData.getSingleTableEntry("SkillBehavior", id)));
    this.$rev_skill = $id.pipe(switchMap(id => this.coreData.getRevEntry<Rev_Skill>('skill_ids', id)));
  }
}
