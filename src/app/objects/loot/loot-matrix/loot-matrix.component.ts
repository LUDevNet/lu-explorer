import { Component, OnInit, Input } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DB_LootMatrix, DB_LootTable } from '../../../../defs/cdclient';

import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'app-loot-matrix',
  templateUrl: './loot-matrix.component.html',
  styleUrls: ['./loot-matrix.component.css']
})
export class LootMatrixComponent implements OnInit {

  @Input() set id(v: number) {
    this.$id.next(v);
  };

  $id: ReplaySubject<number> = new ReplaySubject(1);
  $lootmatrix: Observable<DB_LootMatrix[]>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.$lootmatrix = this.$id.pipe(switchMap(id => this.luCoreData.getTableEntry("LootMatrix", id)));
  }

  getLootTable(index: number): Observable<DB_LootTable[]> {
    return this.luCoreData.getRevEntry("loot_table_index", index).pipe(map(x => x['loot_table']))
  }

}
