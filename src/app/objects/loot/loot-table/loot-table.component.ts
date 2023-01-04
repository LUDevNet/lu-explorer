import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'app-loot-table',
  templateUrl: './loot-table.component.html',
  styleUrls: ['./loot-table.component.css']
})
export class LootTableComponent implements OnInit {

  lootTable: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getLootTable();
  }

  getLootTable(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.coreData.getRevEntry('loot_table_index', this.id)
      .subscribe(lootTable => this.lootTable = lootTable);
  }
}
