import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

import { LuJsonService } from '../../lu-json.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  @Input() id: number;
  component: any;
  baseUrl: string;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getRenderComponent();
  	if (environment.production) {
      // using public API
      this.baseUrl = 'https://xiphoseer.github.io/';
    } else {
      // serving API locally
      this.baseUrl = 'http://localhost:8000/';
    }
  }

  getRenderComponent(): void
  {
  	this.luJsonService.getRenderComponent(this.id)
  	  .subscribe(component => this.component = component);
  }

}
