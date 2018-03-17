import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../lu-json.service';

@Component({
  selector: 'app-loot-matrix',
  templateUrl: './loot-matrix.component.html',
  styleUrls: ['./loot-matrix.component.css']
})
export class LootMatrixComponent implements OnInit {

  @Input() id: number;
  lootmatrix: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.loadLootMatrix();
  }

  loadLootMatrix():void
  {
    this.luJsonService.getLootMatrix(this.id)
      .subscribe(lm => this.lootmatrix = lm);
  }

}
