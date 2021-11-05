import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuCoreDataService, LuJsonService } from '../services';
import { LuaStmt } from './lua/lua';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent implements OnInit {

  $index: Observable<LuaStmt>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.$index = this.luCoreData.getScript('index');
  }

}
