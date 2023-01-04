import { Component, OnInit } from '@angular/core';
import { DB_Release_Version } from '../../../defs/cdclient';

import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-release-version',
  templateUrl: './release-version.component.html',
  styleUrls: ['./release-version.component.css']
})
export class ReleaseVersionComponent implements OnInit {

  table: DB_Release_Version[];

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable()
  }

  getTable(): void {
    this.coreData
      .getFullTable("Release_Version")
      .subscribe(table => this.table = table.sort(this.compareVersionsRev.bind(this)));
  }

  compareVersionsRev(a: DB_Release_Version, b: DB_Release_Version): number {
    return this.compareVersions(b, a);
  }

  compareVersions(a: DB_Release_Version, b: DB_Release_Version): number {
    let aComp = a.ReleaseVersion.split('.');
    let bComp = b.ReleaseVersion.split('.');

    let compMajor = +aComp[0] - +bComp[0];
    let compMinor = +aComp[1] - +bComp[1];
    let compRev = +aComp[2] - +bComp[2];

    if (compMajor == 0) {
      if (compMinor == 0) {
        return compRev;
      }
      return compMinor;
    }
    return compMajor;
  }

}
