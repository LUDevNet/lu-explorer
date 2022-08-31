import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuCoreDataService } from '../../../services';
import { DB_InventoryItem } from '../../../../defs/cdclient';

@Component({
  selector: 'app-inventory-component',
  templateUrl: './inventory-component.component.html',
  styleUrls: ['./inventory-component.component.css']
})
export class InventoryComponentComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  component: ReplaySubject<DB_InventoryItem[]>;

  @Input() set id(value: number) {
    this._id.next(value);
  }

  get id(): number {
    return this.__id;
  }

  constructor(private luCoreDataService: LuCoreDataService) {
    this._id = new ReplaySubject(1);
    this.component = new ReplaySubject(1);

    this._id.pipe(
      tap(id => this.__id = id),
      switchMap(ref => this.luCoreDataService.getTableEntry("InventoryComponent", ref))
    ).subscribe(this.component);
  }

  ngOnInit() {}

}
