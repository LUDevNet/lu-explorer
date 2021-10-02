import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DB_ObjectRef_ByComponent } from '../cdclient';
import { QUICK_BUILD_COMPONENT_ID, REBUILD_COMPONENT_ID, SCRIPTED_ACTIVITY_COMPONENT_ID } from '../components';

import { LuJsonService, LuLocaleService } from '../services';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  $objectsWithScriptedActivity: ReplaySubject<DB_ObjectRef_ByComponent[]> = new ReplaySubject(1);
  $objectsWithRebuild: ReplaySubject<DB_ObjectRef_ByComponent[]> = new ReplaySubject(1);
  $objectsWithQuickBuild: ReplaySubject<DB_ObjectRef_ByComponent[]> = new ReplaySubject(1);
  $rebuildByActivityID: ReplaySubject<Record<string, number[]>> = new ReplaySubject(1);
  activities: Array<any>;
  activityNames: any;

  constructor(private luJsonService: LuJsonService, private luLocale: LuLocaleService) { }

  ngOnInit() {
    this.activityNames = {};
    this.luJsonService
      .getSingleTable("Activities")
      .subscribe(this.processActivitiesIndex.bind(this));
    this.luJsonService.getObjectComponent(SCRIPTED_ACTIVITY_COMPONENT_ID).subscribe(this.$objectsWithScriptedActivity);
    this.luJsonService.getObjectComponent(REBUILD_COMPONENT_ID).subscribe(this.$objectsWithRebuild);
    this.luJsonService.getObjectComponent(QUICK_BUILD_COMPONENT_ID).subscribe(this.$objectsWithQuickBuild);
    this.luJsonService.getRebuildComponentsByActivityID().subscribe(this.$rebuildByActivityID);
  }

  processActivitiesIndex(table: any) {
    this.activities = table.sort((a, b) => a.id - b.id);
  }

  getLocalized(index: number): any {
    let key = String(index);
    if (this.activityNames.hasOwnProperty(key)) {
      return this.activityNames[key];
    }
    return {};
  }

}
