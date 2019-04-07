import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})
export class ObjectsByTypeComponent implements OnInit {

  type: string = "";
  objects: any = [];

  constructor(
    private luJsonService: LuJsonService,
    private luLocaleService: LuLocaleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => this.loadType(map.get('type')))
  }

  loadType(type: string) {
    this.type = type;
    this.luJsonService.getObjectType(type).subscribe(data => this.processType(data));
  }

  processType(data: any) {
    this.objects = data;
  }

}
