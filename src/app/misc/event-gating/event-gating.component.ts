import { Component, OnInit } from '@angular/core';
import { DB_EventGating } from '../../../defs/cdclient';

import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-event-gating',
  templateUrl: './event-gating.component.html',
  styleUrls: ['./event-gating.component.css']
})
export class EventGatingComponent implements OnInit {

  table: any[];

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable()
  }

  getTable(): void {
    this.luCoreData.getTableEntry<DB_EventGating>("EventGating", "all").subscribe(table => this.table = table);
  }

}
