import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject, from, Observable } from 'rxjs';
import { map, combineAll, shareReplay } from 'rxjs/operators';

import { LuCoreDataService } from '../../../services';
import { DB_ObjectSkills, DB_SkillBehavior } from '../../../../defs/cdclient';
import { mapArr, mapToDict, pick } from '../../../../defs/rx';

interface Skill {
  ref: DB_ObjectSkills;
  skill: Observable<DB_SkillBehavior_Ref>;
};

type DB_SkillBehavior_Ref = Pick<DB_SkillBehavior, "skillID" | "skillIcon" | "imaginationcost" | `${"life" | "im" | "armor"}BonusUI` | "damageUI" | "behaviorID">

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  _id: number;
  $skills: Observable<Skill[]>;
  $skillRef = new ReplaySubject<DB_ObjectSkills[]>(1);

  constructor(
    private coreData: LuCoreDataService) {

    this.$skillRef = new ReplaySubject<DB_ObjectSkills[]>(1);
    let $skillIds = this.$skillRef.pipe(mapArr(sk => sk.skillID), shareReplay(1));
    let $skillRows = $skillIds.pipe(
      this.coreData.queryTableEntries$<number[], DB_SkillBehavior_Ref>("SkillBehavior", ["skillID", "skillIcon", "imaginationcost", "lifeBonusUI", "armorBonusUI", "imBonusUI", "damageUI", "behaviorID"]),
      mapToDict("skillID"),
    );
    this.$skills = this.$skillRef.pipe(
      mapArr(ref => {
        return {
          ref,
          skill: $skillRows.pipe(pick(ref.skillID)),
        };
      })
    );
  }

  @Input() set id(value: number) {
    this._id = value;
  }

  get id(): number {
    return this._id;
  }

  @Input() set oskills(ref_list: DB_ObjectSkills[]) {
    this.$skillRef.next(ref_list);
  }

  ngOnInit() { }

  bgImage(path: string): string {
    return "url(/lu-res/" + path + ")";
  }

}
