import { Component, OnInit, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../../services';

@Component({
  selector: 'app-generic-component',
  templateUrl: './generic-component.component.html',
  styleUrls: ['./generic-component.component.css']
})
export class GenericComponentComponent implements OnInit {

  _id: ReplaySubject<number>;
  __id: number;
  _table: ReplaySubject<string>;
  __table: string;
  _paged: ReplaySubject<boolean>;
  __paged: boolean;
  component: ReplaySubject<any>;

  @Input() set id(value: number) {
    this._id.next(value);
  }

  @Input() set paged(value: boolean) {
    this._paged.next(value);
  }

  @Input() set table(value: string) {
    this._table.next(value);
  }

  get id(): number {
    return this.__id;
  }

  get paged(): boolean {
    return this.__paged;
  }

  get table(): string {
    return this.__table;
  }

  constructor(private luJsonService: LuJsonService) {
    this._id = new ReplaySubject(1);
    this._paged = new ReplaySubject(1);
    this._table = new ReplaySubject(1);
    this.component = new ReplaySubject(1);

    this._table.pipe(
      tap(table => this.__table = table),
      switchMap(table => this._paged.pipe(
        tap(paged => this.__paged = paged),
        switchMap(paged => this._id.pipe(
          tap(id => this.__id = id),
          switchMap(id => this.luJsonService.getGeneric(id, table + "Component", paged))
        ))
      ))
    ).subscribe(this.component);
  }

  ngOnInit() {
  }

}
