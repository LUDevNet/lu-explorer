import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../lu-json.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Input() id: number;
  component: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getComponent();
  }

  getComponent(): void
  {
  	this.luJsonService.getInventoryComponent(this.id)
  	  .subscribe(component => this.component = component);
  }
}
