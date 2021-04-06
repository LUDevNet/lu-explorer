import { Component, OnInit } from '@angular/core';

import { LuJsonService } from '../../services';

@Component({
  selector: 'app-brick-colors',
  templateUrl: './brick-colors.component.html',
  styleUrls: ['./brick-colors.component.css']
})
export class BrickColorsComponent implements OnInit {

  table: any[];

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getTable();
  }

  getTable(): void {
  	this.luJsonService
      .getBrickColors()
      .subscribe(table => this.table = table.sort(this.sortById.bind(this)));
  }

  sortById(a,b): number {
    let idA = a.id;
    let idB = b.id;
    return idA - idB;
  }

}
