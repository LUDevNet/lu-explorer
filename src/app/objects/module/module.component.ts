import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  @Input() id: number;
  component: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getComponent();
  }

  getComponent(): void
  {
  	this.luJsonService.getModuleComponent(this.id)
  	  .subscribe(component => this.component = component);
  }

}
