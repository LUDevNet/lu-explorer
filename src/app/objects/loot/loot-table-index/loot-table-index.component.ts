import { Component, OnInit, Input } from '@angular/core';
import { DB_LootTable } from '../../../../defs/cdclient';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'app-loot-table-index',
  templateUrl: './loot-table-index.component.html',
  styleUrls: ['./loot-table-index.component.css']
})
export class LootTableIndexComponent implements OnInit {

  loot_table_index: number;
  loot_table: any;

  @Input() set id(id: number) {
    this.loot_table_index = id;
    this.loadLootTableIndex(id);
  }

  get id() {
    return this.loot_table_index;
  }

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
  }

  loadLootTableIndex(id: number) {
    this.coreData
      .getRevEntry('loot_table_index', id)
      .subscribe(this.processLootTableIndex.bind(this));
  }

  processLootTableIndex(lootTable: { loot_table: DB_LootTable[] }) {
    this.loot_table = lootTable.loot_table;
  }
}
