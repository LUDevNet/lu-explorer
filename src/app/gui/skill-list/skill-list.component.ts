import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { DB_Icons, DB_SkillBehavior } from '../../../defs/cdclient';
import { Locale_SkillBehavior } from '../../../defs/locale';
import { mapRec, mapToDict, pick, recToSet, setValues } from '../../../defs/rx';
import { LuCoreDataService } from '../../services';

interface DB_SkillBehavior_Ref {
  skillID: number;
  skillIcon?: number;
}

const SKILL_BEHAVIOR_KEYS: (keyof DB_SkillBehavior & keyof DB_SkillBehavior_Ref)[] = [
  "skillID",
  "skillIcon",
];

class SkillBehavior {
  constructor(
    public id: number,
    public $table: Observable<DB_SkillBehavior_Ref>,
    public $locale: Observable<Locale_SkillBehavior>,
    public $icon: Observable<DB_Icons>,
  ) { }
}

@Component({
  selector: 'lux-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  @Input()
  ids: number[];
  skills: SkillBehavior[];

  constructor(
    private luCoreData: LuCoreDataService,
  ) { }

  ngOnInit(): void {
    let $table = this.luCoreData.queryTableEntries<DB_SkillBehavior_Ref>("SkillBehavior", this.ids, SKILL_BEHAVIOR_KEYS).pipe(
      mapToDict("skillID"),
      shareReplay(1)
    );
    let $icons = $table.pipe(
      recToSet(v => v.skillIcon),
      setValues(),
      this.luCoreData.icons(),
      shareReplay(1),
    );
    let $locale = this.luCoreData.queryLocale("SkillBehavior", this.ids, ["name"]);
    this.skills = Array.from(this.ids, id => {
      let $t = $table.pipe(pick(id));
      let $l = $locale.pipe(pick(id));
      return new SkillBehavior(id, $t, $l, $t.pipe(switchMap(s => $icons.pipe(pick(s.skillIcon)))))
    });
  }
}
