import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_Preconditions } from '../../../defs/cdclient';
import { Locale_Preconditions } from '../../../defs/locale';
import { LuJsonService, LuLocaleService } from '../../services';

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
    this.$precondition = this.luJson.getPrecondition(this._id);
    this.$locale = this.luLocale.getLocaleEntry("Preconditions", this._id);
  }

  constructor(private luJson: LuJsonService, private luLocale: LuLocaleService) { }

  ngOnInit(): void {
  }

}
