import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../lu-json.service';


@Component({
  selector: 'app-mission-npc',
  templateUrl: './mission-npc.component.html',
  styleUrls: ['./mission-npc.component.css']
})
export class MissionNpcComponent implements OnInit {

  @Input() id: number;
  component: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getComponent();
  }

  getComponent(): void
  {
  	this.luJsonService.getMissionNPCComponent(this.id)
  	  .subscribe(component => this.component = component);
  }

}
