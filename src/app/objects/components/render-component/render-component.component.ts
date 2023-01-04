import { Component, Input } from '@angular/core';
import { LuCoreDataService } from '../../../services';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DB_mapShaders, DB_RenderComponent } from '../../../../defs/cdclient';

@Component({
  selector: 'app-render-component',
  templateUrl: './render-component.component.html',
  styleUrls: ['./render-component.component.css']
})
export class RenderComponentComponent {

  $shaders: Observable<DB_mapShaders[]>;
  component: Observable<DB_RenderComponent>;
  _ref: ReplaySubject<number>;
  _id: number;

  constructor(private coreData: LuCoreDataService) {
    this._ref = new ReplaySubject<number>(1);
    this._ref.subscribe(x => this._id = x);
    this.component = this._ref
      .pipe(switchMap(val => this.coreData.getSingleTableEntry("RenderComponent", val)))
    this.$shaders = this.coreData.getFullTable("mapShaders");
  }

  @Input('id') set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }
}
