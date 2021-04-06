import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService, LuResService } from '../../../services';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DB_mapShaders, DB_RenderComponent } from '../../../cdclient';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-render-component',
  templateUrl: './render-component.component.html',
  styleUrls: ['./render-component.component.css']
})
export class RenderComponentComponent {

  $shaders: Observable<DB_mapShaders[]>;
  component: Observable<DB_RenderComponent>;
  baseUrl: string;
  _ref: ReplaySubject<number>;
  _id: number;

  constructor(private luJsonService: LuJsonService) {
    this._ref = new ReplaySubject<number>(1);
    this._ref.subscribe(x => this._id = x);
    this.component = this._ref
      .pipe(switchMap(val => this.luJsonService.getRenderComponent(val)))
    this.$shaders = this.luJsonService.getShadersMap();
  }

  @Input('id') set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }
}
