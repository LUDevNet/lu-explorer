import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_MissionNPCComponent } from '../../../../defs/cdclient';

@Component({
  selector: 'app-mission-npc-component',
  templateUrl: './mission-npc-component.component.html',
  styleUrls: ['./mission-npc-component.component.css']
})
export class MissionNpcComponentComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  component: ReplaySubject<DB_MissionNPCComponent>;

  @Input() set id(value: number) {
    this._id.next(value);
  }

  get id(): number {
    return this.__id;
  }

  constructor(private luJsonService: LuJsonService) {
    this._id = new ReplaySubject(1);
    this.component = new ReplaySubject(1);

    this._id.pipe(
      tap(id => this.__id = id),
      switchMap(ref => this.luJsonService.getMissionNPCComponent(ref))
    ).subscribe(this.component);
  }

  ngOnInit() {
  }

}
