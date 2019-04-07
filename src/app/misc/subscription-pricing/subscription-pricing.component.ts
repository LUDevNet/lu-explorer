import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../services';

@Component({
  selector: 'app-subscription-pricing',
  templateUrl: './subscription-pricing.component.html',
  styleUrls: ['./subscription-pricing.component.css']
})
export class SubscriptionPricingComponent implements OnInit {

  table: any[];

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getTable()
  }

  getTable(): void
  {
  	this.luJsonService.getSingleTable("SubscriptionPricing").subscribe(this.processData.bind(this));
  }

  processData(table: any)
  {
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
