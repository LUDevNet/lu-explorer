import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../../lu-json.service';

@Component({
  selector: 'app-quick-build-component',
  templateUrl: './quick-build-component.component.html',
  styleUrls: ['./quick-build-component.component.css']
})
export class QuickBuildComponentComponent implements OnInit {

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
