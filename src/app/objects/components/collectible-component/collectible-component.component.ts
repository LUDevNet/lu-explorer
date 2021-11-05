import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_CollectibleComponent } from '../../../../defs/cdclient';

@Component({
  selector: 'app-collectible-component',
  templateUrl: './collectible-component.component.html',
  styleUrls: ['./collectible-component.component.css']
})
export class CollectibleComponentComponent implements OnInit {

  _ref: ReplaySubject<number>;
  _id: number;
  component: ReplaySubject<DB_CollectibleComponent>;

  @Input() set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }

  constructor(private luJsonService: LuJsonService) {
    this._ref = new ReplaySubject(1);
    this.component = new ReplaySubject(1);

    this._ref.subscribe(id => this._id = id);
    this._ref.pipe(
      switchMap(ref => this.luJsonService.getCollectibleComponent(ref))
    ).subscribe(this.component);
  }

  ngOnInit() {
  }

}
