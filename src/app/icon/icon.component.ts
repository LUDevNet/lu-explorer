import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private luJsonService: LuJsonService) { }

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
