import { Component, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LuJsonService } from '../../../services';

class DB_ItemComponent {

}

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent {

  _ref: ReplaySubject<number>;
  _id: number;
  component: ReplaySubject<DB_ItemComponent>;

  constructor(private luJsonService: LuJsonService) {
    this._ref = new ReplaySubject(1);
    this.component = new ReplaySubject(1);

    this._ref.subscribe(id => this._id = id);
    this._ref.pipe(
      switchMap(ref => this.luJsonService.getItemComponent(ref))
    ).subscribe(this.component);
  }

  @Input() set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }
}
