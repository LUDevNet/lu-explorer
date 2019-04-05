import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService, LuResService } from '../../../services';
import { Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-render-component',
  templateUrl: './render-component.component.html',
  styleUrls: ['./render-component.component.css']
})
export class RenderComponentComponent {

  component: any;
  baseUrl: string;
  _ref: ReplaySubject<number>;
  _id: number;

  constructor(
    private luJsonService: LuJsonService,
    private luResService: LuResService) {
    this._ref = new ReplaySubject<number>(1);
    this._ref.subscribe(x => this._id = x);
    this.component = this._ref
      .pipe(switchMap(val => this.luJsonService.getRenderComponent(val)))
  }

  @Input('id') set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }
}
