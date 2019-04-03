import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map, combineAll, take, tap, switchMap } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

import { LuJsonService, LuResService } from '../../../services';

class SkillRef {
  skillID: number;
}

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  _id: number;
  skills: any = {};
  skill_ref: ReplaySubject<SkillRef[]>;

  constructor(
    private luJsonService: LuJsonService,
    private luResService: LuResService) {

    this.skill_ref = new ReplaySubject<SkillRef[]>(1);
    this.skills = this.skill_ref
      .pipe(
        switchMap(ref_list => {
          return from(ref_list)
            .pipe(
              map(ref => {
                let id = ref.skillID;
                return this.luJsonService.getSkill(id)
                  .pipe(map(data => {
                    return {ref: ref, skill: data};
                  }));
              }),
              combineAll((...values) => {
                var dict = {};
                values.forEach(data => dict[data.ref.skillID] = data);
                return dict;
              })
            )
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

  ngOnInit() {}

  image(path: string): string {
    return this.luResService.getResolvedResUrl(path);
  }

  bgImage(path:string) : string {
    return "url(" + this.image(path) + ")";
  }

}
