import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LuJsonService } from '../../services';
import { DB_LevelProgressionLookup } from '../../cdclient';

@Component({
  selector: 'app-level-progression',
  templateUrl: './level-progression.component.html',
  styleUrls: ['./level-progression.component.css']
})
export class LevelProgressionComponent implements OnInit {

  table: Observable<DB_LevelProgressionLookup[]>;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.table = this.luJsonService.getSingleTable('LevelProgressionLookup');
  }

}
