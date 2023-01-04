import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LuCoreDataService } from '../../services';
import { DB_brickAttributes } from '../../../defs/cdclient';

@Component({
  selector: 'app-brick-attributes',
  templateUrl: './brick-attributes.component.html',
  styleUrls: ['./brick-attributes.component.css']
})
export class BrickAttributesComponent implements OnInit {

  table: Observable<DB_brickAttributes[]>;

  constructor(
    private luCoreData: LuCoreDataService) { }

  ngOnInit() {
    this.table = this.luCoreData.getFullTable('brickAttributes');
  }

}
