import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DB_ObjectRef_ByComponent } from '../cdclient';
import { SCRIPTED_ACTIVITY_COMPONENT_ID } from '../components';

import { LuJsonService, LuLocaleService } from '../services';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  $objectsWithScriptedActivity: ReplaySubject<DB_ObjectRef_ByComponent[]> = new ReplaySubject(1);
  activities: Array<any>;
  activityNames: any;

  constructor(private luJsonService: LuJsonService, private luLocale: LuLocaleService) { }

  ngOnInit() {
    this.activityNames = {};
    this.luJsonService
      .getSingleTable("Activities")
      .subscribe(this.processActivitiesIndex.bind(this));
    this.luJsonService
      .getLocale("Activities")
      .subscribe(this.processActivitiesLocaleIndex.bind(this));
    this.luJsonService.getObjectComponent(SCRIPTED_ACTIVITY_COMPONENT_ID).subscribe(this.$objectsWithScriptedActivity);
  }

  processActivitiesIndex(table: any) {
    this.activities = table.sort((a, b) => a.id - b.id);
  }

  processActivitiesLocaleIndex(table: any) {
    table.pages.forEach(page => {
      this.luJsonService
        .getLocalePage("Activities", page)
        .subscribe(this.processActivitiesLocalePage.bind(this))
    });
  }

  processActivitiesLocalePage(table: any) {
    this.activityNames = Object.assign(this.activityNames, table);
  }

  getLocalized(index: number): any {
    let key = String(index);
    if (this.activityNames.hasOwnProperty(key)) {
      return this.activityNames[key];
    }
    return {};
  }

}
