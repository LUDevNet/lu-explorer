import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LuJsonService } from '../lu-json.service';
import { Behavior } from '../cdclient';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit {
  
  @Input() behaviorID: number;
  behavior: Behavior;

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService
    ) { }

  ngOnInit() {
  	this.getBehavior();
  }

  getBehavior(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.behaviorID = id;
    this.luJsonService.getBehavior(id)
      .subscribe(behavior => this.behavior = behavior);
  }

}
