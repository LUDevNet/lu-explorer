import { Component, OnInit, Input } from '@angular/core';

import { LuJsonService } from '../../services';

@Component({
  selector: 'app-npc-icon',
  templateUrl: './npc-icon.component.html',
  styleUrls: ['./npc-icon.component.css']
})
export class NpcIconComponent implements OnInit {

  @Input() id: number;
  @Input() width: string = '64px';
  icon: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  	this.getIcon();
  }

  getIcon(): void
  {
  	this.luJsonService.getNpcIcon(this.id).subscribe(icon => this.icon = icon);
  }

}
