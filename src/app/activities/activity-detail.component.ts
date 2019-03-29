import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocaleService } from '../locale.service';
import { LuJsonService } from '../lu-json.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity_id: number = -1;
  activity_loc: any;
  activity_rewards: {};
  activity: any;

  constructor(
    private luJsonService: LuJsonService,
    private localeService: LocaleService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.processRouteChange.bind(this))
  }

  processRouteChange(map: any) {
    this.activity_id = map.get('id');
    this.localeService
      .getLocaleEntry('Activities', this.activity_id)
      .subscribe(entry => this.activity_loc = entry);
    this.luJsonService
      .getGeneric(this.activity_id, 'Activities', true)
      .subscribe(entry => this.activity = entry);
    this.luJsonService
      .getActivityRewards(this.activity_id)
      .subscribe(entry => this.activity_rewards = entry);
  }

}
