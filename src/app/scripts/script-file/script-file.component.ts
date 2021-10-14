import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { LuCoreDataService, LuJsonService } from '../../services';
import { LuaStmt } from '../lua/lua';

@Component({
  selector: 'app-script-file',
  templateUrl: './script-file.component.html',
  styleUrls: ['./script-file.component.css']
})
export class ScriptFileComponent implements OnInit {

  $file: Observable<LuaStmt>;
  path: string;
  segments: Array<string>;

  constructor(
    private luCoreData: LuCoreDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.updateRoute.bind(this))
  }

  updateRoute(map) {
    this.path = map.get('path');
    this.segments = this.path.split('/');
    this.$file = this.luCoreData.getScript(this.path);
  }

  getLink(i: number, segment: string): Array<string> {
    return ['/scripts'].concat(this.segments.slice(0,i + 1));
  }

}
