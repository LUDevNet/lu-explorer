import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../services';
import { DB_Icons } from '../../cdclient';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconID: number;
  @Input() width: string = '64px';
  @Input() caption: boolean = true;
  icon: DB_Icons;

  constructor(private luJsonService: LuJsonService) {
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
