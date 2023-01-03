import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_Preconditions } from '../../../defs/cdclient';
import { Locale_Preconditions } from '../../../defs/locale';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-precondition',
  templateUrl: './precondition.component.html',
  styleUrls: ['./precondition.component.css']
})
export class PreconditionComponent implements OnInit {
  private _id: number;
  $precondition: Observable<DB_Preconditions>;
  $locale: Observable<Locale_Preconditions>;

  get id(): number { return this._id; }

  @Input() set id(value: number) {
    this._id = value;
    this.$precondition = this.coreData.getSingleTableEntry("Preconditions", this._id);
    this.$locale = this.coreData.getLocaleSubtree("Preconditions", this._id);
  }

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit(): void {
  }

}
