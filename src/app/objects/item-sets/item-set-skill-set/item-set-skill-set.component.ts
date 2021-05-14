import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_ItemSetSkills } from '../../../cdclient';

@Component({
  selector: 'app-item-set-skill-set',
  templateUrl: './item-set-skill-set.component.html',
  styleUrls: ['./item-set-skill-set.component.css']
})
export class ItemSetSkillSetComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  response: Observable<{set_skills: DB_ItemSetSkills[]}>;

  @Input() count: number;
  @Input() set id(value: number) {
    this._id.next(value);
  }

  get id(): number {
    return this.__id;
  }

  constructor(private luJsonService: LuJsonService) {
    this._id = new ReplaySubject(1);
  }

  ngOnInit() {
    this.response = this._id.pipe(
      tap(this.tapId.bind(this)),
      switchMap(this.mapToRequest.bind(this))
    );
  }

  tapId(id) {
    this.__id = id;
  }

  mapToRequest(id) {
    return this.luJsonService.getGeneric(id, 'ItemSetSkills', true);
  }

}
