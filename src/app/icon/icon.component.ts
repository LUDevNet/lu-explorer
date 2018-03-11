import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

import { LuJsonService } from '../lu-json.service';
import { Icons } from '../cdclient';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconID: number;
  icon: Icons;
  baseUrl: string;

  constructor(private luJsonService: LuJsonService) {
    if (environment.production) {
      // using public API
      this.baseUrl = 'https://xiphoseer.github.io/';
    } else {
      // serving API locally
      this.baseUrl = 'http://localhost:8000/';
    }
  }

  ngOnInit() {
  	this.getIcon();
  }

  getIcon(): void {
  	if (this.iconID != undefined)
  	{
  	  this.luJsonService.getIcon(this.iconID)
        .subscribe(icon => this.icon = icon);
  	}
  }

}
