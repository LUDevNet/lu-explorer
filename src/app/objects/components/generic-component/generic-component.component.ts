import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuCoreDataService } from '../../../services';

type GenericComponentName = "Pet" | "Module" | "MovementAI" | "RocketLaunchpadControl" | "ProximityMonitor";

@Component({
  selector: 'app-generic-component',
  templateUrl: './generic-component.component.html',
  styleUrls: ['./generic-component.component.css']
})
export class GenericComponentComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  _table: ReplaySubject<GenericComponentName>;
  __table: GenericComponentName;
  $component: ReplaySubject<any>;

  @Input() set id(value: number) {
    this._id.next(value);
  }

  @Input() set table(value: GenericComponentName) {
    this._table.next(value);
  }

  get id(): number {
    return this.__id;
  }

  get table(): GenericComponentName {
    return this.__table;
  }

  constructor(private coreData: LuCoreDataService) {
    this._id = new ReplaySubject(1);
    this._table = new ReplaySubject(1);
    this.$component = new ReplaySubject(1);

    this._table.pipe(
      tap(table => this.__table = table),
      switchMap(table => this._id.pipe(
        tap(id => this.__id = id),
        switchMap(id => this.coreData.getSingleTableEntry(`${table}Component`, id))
      ))
    ).subscribe(this.$component);
  }

  ngOnInit() {
  }

}
