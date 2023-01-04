import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_mapShaders } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-shaders',
  templateUrl: './shaders.component.html',
  styleUrls: ['./shaders.component.css']
})
export class ShadersComponent implements OnInit {

  sort: string = 'id';
  $table: Observable<DB_mapShaders[]>;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit() {
    this.getTable();
  }

  getTable(): void {
    this.$table = this.coreData.getFullTable("mapShaders");
  }

  setSort(key: string) {
    this.sort = key;
  }
}
