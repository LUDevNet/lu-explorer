import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../services';
import { DB_Icons } from '../../cdclient';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  private _iconID: number;
  @Input() width: string = '64px';
  @Input() caption: boolean = true;
  icon: DB_Icons;

  get iconID(): number { return this._iconID; }

  @Input() set iconID(value: number) {
    this._iconID = value;
    if (this.iconID != undefined) {
      this.luJsonService.getIcon(this.iconID).subscribe(icon => this.icon = icon);
    }
  }

  constructor(private luJsonService: LuJsonService) {
  }

  ngOnInit() {
  }
}
