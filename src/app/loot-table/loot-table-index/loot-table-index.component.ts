import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../lu-json.service';

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

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  }

  loadLootTableIndex(id: number) {
    this.luJsonService
      .getLootTableGroupByIndex(id)
      .subscribe(this.processLootTableIndex.bind(this));
  }

  processLootTableIndex(lootTable: any) {
     this.loot_table = lootTable.elements.sort(this.sortLootTableEntry.bind(this))
  }

  sortLootTableEntry(a,b): number {
    return a.sortPriority - b.sortPriority;
  }

}
