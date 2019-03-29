import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../lu-json.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {

  currency_table: any;
  currency_index: number;

  @Input() set id(value: number) {
    this.currency_index = value;
    this.getCurrencyIndex(value);
  }

  get id() {
    return this.currency_index;
  }

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  }

  getCurrencyIndex(id: number) {
    this.luJsonService
      .getCurrencyIndex(id)
      .subscribe(this.processCurrencyIndex.bind(this))
  }

  processCurrencyIndex(table: any) {
    this.currency_table = table.currency_table;
  }

}
