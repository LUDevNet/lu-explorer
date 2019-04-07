import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { LuJsonService } from '../../services';
import { DB_Behavior } from '../../cdclient';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit {

  behaviorID: number;
  _behavior: Observable<DB_Behavior>;

  constructor(
  	private route: ActivatedRoute,
    private luJsonService: LuJsonService
    ) { }

  ngOnInit() {
    this._behavior = this.route.paramMap.pipe(
      map(map => +map.get('id')),
      tap(id => this.behaviorID = id),
      switchMap(id => this.luJsonService.getBehavior(id))
    )
  }
}
