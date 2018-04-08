import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-collectible',
  templateUrl: './collectible.component.html',
  styleUrls: ['./collectible.component.css']
})
export class CollectibleComponent implements OnInit {

  @Input() id: number;
  component: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getComponent();
  }

  getComponent(): void
  {
  	this.luJsonService.getCollectibleComponent(this.id)
  	  .subscribe(component => this.component = component);
  }

}
