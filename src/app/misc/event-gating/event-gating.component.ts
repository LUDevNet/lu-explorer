import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../services';

@Component({
  selector: 'app-event-gating',
  templateUrl: './event-gating.component.html',
  styleUrls: ['./event-gating.component.css']
})
export class EventGatingComponent implements OnInit {

  table: any[];

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getTable()
  }

  getTable(): void
  {
  	this.luJsonService.getSingleTable("EventGating").subscribe(table => this.table = table);
  }

}
