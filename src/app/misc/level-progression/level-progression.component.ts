import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LuCoreDataService } from '../../services';
import { DB_LevelProgressionLookup } from '../../../defs/cdclient';

@Component({
  selector: 'app-level-progression',
  templateUrl: './level-progression.component.html',
  styleUrls: ['./level-progression.component.css']
})
export class LevelProgressionComponent implements OnInit {

  table: Observable<DB_LevelProgressionLookup[]>;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.table = this.coreData.getFullTable('LevelProgressionLookup');
  }

}
