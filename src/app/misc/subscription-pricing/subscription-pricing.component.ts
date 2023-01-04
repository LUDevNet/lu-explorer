import { Component, OnInit } from '@angular/core';
import { DB_SubscriptionPricing } from '../../../defs/cdclient';

import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-subscription-pricing',
  templateUrl: './subscription-pricing.component.html',
  styleUrls: ['./subscription-pricing.component.css']
})
export class SubscriptionPricingComponent implements OnInit {

  table: DB_SubscriptionPricing[];

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable()
  }

  getTable(): void {
    this.coreData.getFullTable("SubscriptionPricing").subscribe(this.processData.bind(this));
  }

  processData(table: DB_SubscriptionPricing[]) {
    this.table = table;
  }

  printValue(amount: string, currencySymbol: number, isAppended: boolean) {
    if (isAppended) {
      return amount + String.fromCharCode(currencySymbol);
    } else {
      return String.fromCharCode(currencySymbol) + amount;
    }
  }

}
