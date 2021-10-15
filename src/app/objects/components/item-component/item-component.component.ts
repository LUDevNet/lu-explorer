import { Component, Input } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LuJsonService } from '../../../services';
import { DB_mapItemTypes, DB_ItemComponent, DB_BrickColors, DB_brickAttributes } from '../../../../defs/cdclient';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent {

  _ref: ReplaySubject<number>;
  _id: number;
  $component: ReplaySubject<DB_ItemComponent>;
  $itemTypes: Observable<DB_mapItemTypes[]>;
  $brickColors: Observable<DB_BrickColors[]>;
  $brickAttrs: Observable<DB_brickAttributes[]>;

  constructor(private luJsonService: LuJsonService) {
    this._ref = new ReplaySubject(1);
    this.$component = new ReplaySubject(1);

    this._ref.subscribe(id => this._id = id);
    this._ref.pipe(
      switchMap(ref => this.luJsonService.getItemComponent(ref))
    ).subscribe(this.$component);

    this.$itemTypes = this.luJsonService.getItemTypes();
    this.$brickColors = this.luJsonService.getBrickColors();
    this.$brickAttrs = this.luJsonService.getSingleTable('brickAttributes');
  }

  @Input() set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }

  some(val: number): boolean {
    return val == 0 || Boolean(val);
  }
}
