import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../services';
import { DB_Behavior } from '../../cdclient';

@Component({
  selector: 'app-behavior-detail',
  templateUrl: './behavior-detail.component.html',
  styleUrls: ['./behavior-detail.component.css']
})
export class BehaviorDetailComponent implements OnInit {

  _behavior: Observable<DB_Behavior>;
  _id: ReplaySubject<number>;
  __id: number;

  @Input() set behaviorID(value: number) {
    this._id.next(value);
  }

  get behaviorID (): number {
    return this.__id;
  }

  active: boolean = false;
  hidden: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private luJsonService: LuJsonService
    ) {
      this._id = new ReplaySubject(1);
      this._behavior = this._id.pipe(
        tap(id => this.__id = id),
        switchMap(id => this.luJsonService.getBehavior(id))
      )
    }

  ngOnInit() {

  }

  toggle(): void
  {
    if (!this.active)
    {
      this.active = true;
      this.hidden = false;
    }
    this.hidden = !this.hidden;
  }

}
