import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../../services';

@Component({
  selector: 'app-rebuild-component',
  templateUrl: './rebuild-component.component.html',
  styleUrls: ['./rebuild-component.component.css']
})
export class RebuildComponentComponent implements OnInit {

  @Input() id: number;
  component: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getComponent();
  }

  getComponent(): void
  {
  	this.luJsonService.getRebuildComponent(this.id)
  	  .subscribe(component => this.component = component);
  }

}
