import { Component, OnInit } from '@angular/core';
import { DB_FeatureGating } from '../../../defs/cdclient';

import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-feature-gating',
  templateUrl: './feature-gating.component.html',
  styleUrls: ['./feature-gating.component.css']
})
export class FeatureGatingComponent implements OnInit {

  table: DB_FeatureGating[];

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable()
  }

  getTable(): void {
    this.luCoreData.getFullTable("FeatureGating").subscribe(this.processData.bind(this));
  }

  processData(table: DB_FeatureGating[]) {
    this.table = table.sort(this.compareVersionsRev.bind(this));
  }

  compareVersionsRev(a: DB_FeatureGating, b: DB_FeatureGating): number {
    return this.compareVersions(b, a);
  }

  compareVersions(a: DB_FeatureGating, b: DB_FeatureGating): number {
    let compMajor = a.major - b.major;
    let compCurrent = a.current - b.current;
    let compMinor = a.minor - b.minor;

    if (compMajor == 0) {
      if (compCurrent == 0) {
        return compMinor;
      }
      return compCurrent;
    }
    return compMajor;
  }

}
