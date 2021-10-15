import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';
import { DB_VendorComponent } from '../../../../defs/cdclient';

@Component({
  selector: 'app-vendor-component',
  templateUrl: './vendor-component.component.html',
  styleUrls: ['./vendor-component.component.css']
})
export class VendorComponentComponent implements OnInit {

  _id: number;
  _ref: ReplaySubject<number>;
  component: Observable<DB_VendorComponent>;

  @Input() set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }


  constructor(private luJsonService: LuJsonService) {
    this._ref = new ReplaySubject(1);
    this.component = this._ref.pipe(tap(id => this._id = id), switchMap(this.query.bind(this)));
  }

  ngOnInit() {
  }

  query(id: number): Observable<DB_VendorComponent>
  {
  	return this.luJsonService.getGeneric(this.id, "VendorComponent", true)
  }
}
