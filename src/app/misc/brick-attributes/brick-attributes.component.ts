import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LuJsonService, LuLocaleService } from '../../services';
import { DB_brickAttributes } from '../../cdclient';

@Component({
  selector: 'app-brick-attributes',
  templateUrl: './brick-attributes.component.html',
  styleUrls: ['./brick-attributes.component.css']
})
export class BrickAttributesComponent implements OnInit {

  table: Observable<DB_brickAttributes[]>;

  constructor(
    private luJsonService: LuJsonService,
    private luLocaleService: LuLocaleService) { }

  ngOnInit() {
    this.table = this.luJsonService.getSingleTable('brickAttributes');
  }

}
