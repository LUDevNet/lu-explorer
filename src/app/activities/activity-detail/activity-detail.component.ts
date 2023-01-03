import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DB_Activities, DB_ActivityRewards } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity_id: number = -1;
  activity_loc: any;
  activity: DB_Activities;

  $activityRewards: Observable<DB_ActivityRewards[]>;

  constructor(
    private coreData: LuCoreDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let $id = this.route.paramMap.pipe(map(map => map.get('id')));
    this.$activityRewards = $id.pipe(switchMap(id => {
      return this.coreData.getTableEntry("ActivityRewards", id);
    }));
    this.route.paramMap.subscribe(this.processRouteChange.bind(this))
  }

  processRouteChange(map: any) {
    this.activity_id = map.get('id');
    this.coreData.getLocaleSubtree('Activities', this.activity_id)
      .subscribe(entry => this.activity_loc = entry);
    this.coreData.getSingleTableEntry('Activities', this.activity_id)
      .subscribe(entry => this.activity = entry);
  }

}
