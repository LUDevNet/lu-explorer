import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../../lu-json.service';
import { ReplaySubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-package-component',
  templateUrl: './package-component.component.html',
  styleUrls: ['./package-component.component.css']
})
export class PackageComponentComponent implements OnInit {

  _ref: ReplaySubject<any>;
  _id: number;
  component: ReplaySubject<any>;

  constructor(private luJsonService: LuJsonService) {
    this._ref = new ReplaySubject<any>(1);
    this.component = new ReplaySubject<any>(1);

    this._ref.subscribe(id => this._id = id);
    this._ref.pipe(
      switchMap(id => this.luJsonService.getPackageComponent(id))
    ).subscribe(x => this.component.next(x));
  }

  @Input() set id(value: number) {
    console.log(value);
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }

  ngOnInit() {
  }

}
