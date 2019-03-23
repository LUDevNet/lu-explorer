import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-feature-gating',
  templateUrl: './feature-gating.component.html',
  styleUrls: ['./feature-gating.component.css']
})
export class FeatureGatingComponent implements OnInit {

  table: any[];

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getTable()
  }

  getTable(): void
  {
  	this.luJsonService.getSingleTable("FeatureGating").subscribe(this.processData.bind(this));
  }

  processData(table: any)
  {
    this.table = table.sort(this.compareVersionsRev.bind(this));
  }

  compareVersionsRev(a,b) : number {
    return this.compareVersions(b,a);
  }

  compareVersions(a,b): number
  {

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
