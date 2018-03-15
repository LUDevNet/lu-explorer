import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  @Input() id: number;
  component: any;
  lootmatrix: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.luJsonService.getPackageComponent(this.id)
  	  .subscribe(component => this.load(component));
  }

  load(component: any):void
  {
    this.component = component;
    this.luJsonService.getLootMatrix(this.component.LootMatrixIndex)
      .subscribe(lm => this.lootmatrix = lm);
  }

}
