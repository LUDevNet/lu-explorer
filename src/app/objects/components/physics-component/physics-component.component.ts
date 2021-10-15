import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_PhysicsComponent } from '../../../../defs/cdclient';


@Component({
  selector: 'app-physics-component',
  templateUrl: './physics-component.component.html',
  styleUrls: ['./physics-component.component.css']
})
export class PhysicsComponentComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  $component: ReplaySubject<DB_PhysicsComponent>;
  @Input() name: string;

  @Input() set id(value: number) {
    this._id.next(value);
  }

  get id(): number {
    return this.__id;
  }

  constructor(private luJsonService: LuJsonService) {
    this._id = new ReplaySubject(1);
    this.$component = new ReplaySubject(1);

    this._id.pipe(
      tap(id => this.__id = id),
      switchMap(ref => this.luJsonService.getPhysicsComponent(ref))
    ).subscribe(this.$component);
  }

  ngOnInit() {
  }

}
