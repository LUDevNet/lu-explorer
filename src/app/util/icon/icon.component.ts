import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { LuJsonService } from '../../services';
import { DB_Icons } from '../../../defs/cdclient';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  private _iconID: number;
  @Input() width: string = '64px';
  @Input() caption: boolean = true;
  $icon: Observable<DB_Icons>;

  get iconID(): number { return this._iconID; }

  @Input() set iconID(value: number) {
    this._iconID = value;
    if (this.iconID != undefined) {
      this.$icon = this.luJsonService.getIcon(this.iconID);
    }
  }

  constructor(private luJsonService: LuJsonService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }
}
