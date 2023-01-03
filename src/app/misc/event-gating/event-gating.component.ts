import { Component, OnInit } from '@angular/core';
import { DB_EventGating } from '../../../defs/cdclient';

import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-event-gating',
  templateUrl: './event-gating.component.html',
  styleUrls: ['./event-gating.component.css']
})
export class EventGatingComponent implements OnInit {

  table: DB_EventGating[];

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable()
  }

  getTable(): void {
    this.luCoreData.getFullTable("EventGating").subscribe(table => this.table = table);
  }

}
