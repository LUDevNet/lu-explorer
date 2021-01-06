import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_InventoryComponent } from '../../../cdclient';
import { Optional } from '../../../util/services/lu-json.service';

@Component({
  selector: 'app-inventory-component',
  templateUrl: './inventory-component.component.html',
  styleUrls: ['./inventory-component.component.css']
})
export class InventoryComponentComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  component: ReplaySubject<Optional<DB_InventoryComponent>>;

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
      switchMap(ref => this.luJsonService.getInventoryComponent(ref))
    ).subscribe(this.component);
  }

  ngOnInit() {
  }

}
