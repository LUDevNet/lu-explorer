import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Rev_ComponentType } from '../../defs/api';
import { DB_Activities, DB_ActivityRewards } from '../../defs/cdclient';
import { QUICK_BUILD_COMPONENT_ID, REBUILD_COMPONENT_ID, SCRIPTED_ACTIVITY_COMPONENT_ID } from '../../defs/components';
import { Locale_ActivityRewards } from '../../defs/locale';

import { LuCoreDataService } from '../util/services/lu-core-data.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  $objectsWithScriptedActivity: ReplaySubject<Rev_ComponentType> = new ReplaySubject(1);
  $objectsWithRebuild: ReplaySubject<Rev_ComponentType> = new ReplaySubject(1);
  $objectsWithQuickBuild: ReplaySubject<Rev_ComponentType> = new ReplaySubject(1);
  //$rebuildByActivityID: ReplaySubject<Record<string, number[]>> = new ReplaySubject(1);
  activities: DB_Activities[];
  activityNames: any;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.activityNames = {};
    this.coreData.getFullTable("Activities")
      .subscribe(this.processActivitiesIndex.bind(this));
    this.coreData.getRevEntry("component_types", SCRIPTED_ACTIVITY_COMPONENT_ID).subscribe(this.$objectsWithScriptedActivity);
    this.coreData.getRevEntry("component_types", REBUILD_COMPONENT_ID).subscribe(this.$objectsWithRebuild);
    this.coreData.getRevEntry("component_types", QUICK_BUILD_COMPONENT_ID).subscribe(this.$objectsWithQuickBuild);
    //this.luJsonService.getRebuildComponentsByActivityID().subscribe(this.$rebuildByActivityID);
  }

  $activityRewards(id: number): Observable<DB_ActivityRewards[]> {
    return this.coreData.getTableEntry("ActivityRewards", id);
  }

  commonPrefix<T>(list: T[], key: keyof T): string {
    if (list.length > 0) {
      let check = String(list[0][key]);
      let len = check.length;
      list.forEach(v => {
        let k = String(v[key]);
        let min = Math.min(len, k.length);
        for (let i = 0; i < min; i++) {
          if (k.charAt(i) != check.charAt(i)) {
            len = i;
            break;
          }
        }
      });
      let text = check.slice(0, len);
      //if (text.endsWith(' - ')) {
      //  text = text.slice(0, -3);
      //}
      return len == 0 ? "[no common prefix]" : text.replace(/ - $/, "");
    }
    return "[unnamed]";
  }

  processActivitiesIndex(table: DB_Activities[]) {
    this.activities = table.sort((a, b) => a.ActivityID - b.ActivityID);
  }

  getLocalized(index: number): any {
    let key = String(index);
    if (this.activityNames.hasOwnProperty(key)) {
      return this.activityNames[key];
    }
    return {};
  }

  localize(activity: DB_Activities): Observable<Locale_ActivityRewards> {
    if (activity.localize && activity.locStatus == 2) {
      let o = this.coreData.getLocaleSubtree<Locale_ActivityRewards>(`Activities_${activity.ActivityID}`);
      return o;
    }
  }

}
