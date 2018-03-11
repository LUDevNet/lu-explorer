import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../lu-json.service';
import { Behavior } from '../../cdclient';

@Component({
  selector: 'app-behavior-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class BehaviorDetailComponent implements OnInit {

  @Input() behaviorID: number;
  behavior: Behavior;
  active: boolean = false;
  hidden: boolean = true;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit()
  {
  	this.getBehavior();
  }

  getBehavior(): void
  {
    if (this.behaviorID > 0)
    {
      this.luJsonService.getBehavior(this.behaviorID)
        .subscribe(behavior => this.behavior = behavior);  
    }
  }

  toggle(): void
  {
    if (!this.active)
    {
      this.active = true;
      this.hidden = false;
    }
    this.hidden = !this.hidden;
  }
}
