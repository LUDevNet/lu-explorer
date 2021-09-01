import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../../services';

@Component({
  selector: 'app-script-file',
  templateUrl: './script-file.component.html',
  styleUrls: ['./script-file.component.css']
})
export class ScriptFileComponent implements OnInit {

  file: any;
  path: string;
  segments: Array<string>;

  constructor(
    private luJsonService: LuJsonService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.updateRoute.bind(this))
  }

  updateRoute(map) {
    this.path = map.get('path');
    this.segments = this.path.split('/');
    this.luJsonService
      .getScript(this.path)
      .subscribe(file => {
        this.file = file;
        this.cd.detectChanges();
      });
  }

  getLink(i: number, segment: string): Array<string> {
    return ['/scripts'].concat(this.segments.slice(0, i + 1));
  }

}
