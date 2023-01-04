import { Component, OnInit, Input } from '@angular/core';
import { LuCoreDataService } from '../../../services';
import { ReplaySubject } from 'rxjs';
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

  constructor(private coreData: LuCoreDataService) {
    this._ref = new ReplaySubject<any>(1);
    this.component = new ReplaySubject<any>(1);

    this._ref.subscribe(id => this._id = id);
    this._ref.pipe(
      switchMap(id => this.coreData.getSingleTableEntry("PackageComponent", id))
    ).subscribe(this.component);
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
