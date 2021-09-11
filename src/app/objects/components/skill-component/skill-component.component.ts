import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject, from, Observable } from 'rxjs';
import { map, combineAll, switchMap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_SkillBehavior, SkillRef } from '../../../cdclient';

interface Skill {
  ref: SkillRef;
  skill: DB_SkillBehavior;
};

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  _id: number;
  skills: Observable<{[id: number]: Skill}>;
  skill_ref: ReplaySubject<SkillRef[]>;

  constructor(
    private luJsonService: LuJsonService) {

    this.skill_ref = new ReplaySubject<SkillRef[]>(1);
    this.skills = this.skill_ref
      .pipe(
        switchMap(this.mapRef.bind(this))
      )
  }

  mapRef(ref_list: SkillRef[] = []) {
    return from(ref_list)
      .pipe(
        map(ref => {
          let id = ref.skillID;
          return this.luJsonService.getSkill(id)
            .pipe(map(data => {
              return { ref: ref, skill: data };
            }));
        }),
        combineAll((...values) => {
          var dict = {};
          values.forEach(data => dict[data.ref.skillID] = data);
          return dict;
        })
      )
  }

  @Input() set id(value: number) {
    this._id = value;
  }

  get id(): number {
    return this._id;
  }

  @Input() set oskills(ref_list: SkillRef[]) {
    this.skill_ref.next(ref_list);
  }

  ngOnInit() { }

  bgImage(path: string): string {
    return "url(/lu-res/" + path + ")";
  }

}
