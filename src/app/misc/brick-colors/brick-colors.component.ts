import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_BrickColors } from '../../../defs/cdclient';

import { LuCoreDataService } from '../../services';

@Component({
  selector: 'app-brick-colors',
  templateUrl: './brick-colors.component.html',
  styleUrls: ['./brick-colors.component.css']
})
export class BrickColorsComponent implements OnInit {

  $table: Observable<DB_BrickColors[]>;
  sortKey: string = "id";

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable();
  }

  sort(key: string) {
    this.sortKey = key;
  }

  getTable(): void {
    this.$table = this.coreData.getFullTable("BrickColors");
  }

  colorRGBA(color: DB_BrickColors): string {
    return `rgba(${color.red * 255},${color.green * 255},${color.blue * 255},${color.alpha})`;
  }

  colorHex(color: DB_BrickColors): string {
    const map = (p) => Math.round(p * 255).toString(16).padStart(2, '0');
    return `#${map(color.red)}${map(color.green)}${map(color.blue)}`;
  }

  useDarkText(color: DB_BrickColors): boolean {
    let L = 0.2126 * color.red + 0.7152 * color.green + 0.0722 * color.blue;
    return L > 0.179;
  }
}
