import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_mapShaders } from '../../cdclient';
import { LuJsonService } from '../../util/util.module';

@Component({
  selector: 'lux-shaders',
  templateUrl: './shaders.component.html',
  styleUrls: ['./shaders.component.css']
})
export class ShadersComponent implements OnInit {

  sort: string = 'id';
  $table: Observable<DB_mapShaders[]>;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getTable();
  }

  getTable(): void {
  	this.$table = this.luJsonService.getShadersMap();
  }

  setSort(key: string) {
    this.sort = key;
  }
}
