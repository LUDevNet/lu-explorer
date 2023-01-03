import { Component, OnInit, Input } from '@angular/core';
import { DB_CurrencyTable } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.css']
})
export class CurrencyTableComponent implements OnInit {

  currency_table: DB_CurrencyTable[];
  currency_index: number;

  @Input() level?: number = 0;

  @Input() set id(value: number) {
    this.currency_index = value;
    this.getCurrencyIndex(value);
  }

  get id() {
    return this.currency_index;
  }

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
  }

  getCurrencyIndex(id: number) {
    this.coreData
      .getTableEntry("CurrencyTable", id)
      .subscribe(this.processCurrencyIndex.bind(this))
  }

  processCurrencyIndex(table: DB_CurrencyTable[]) {
    this.currency_table = table;
  }
}
