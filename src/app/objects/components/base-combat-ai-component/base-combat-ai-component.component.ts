import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DB_BaseCombatAIComponent } from '../../../../defs/cdclient';
import { LuCoreDataService, LuJsonService } from '../../../services';

@Component({
  selector: 'lux-base-combat-ai-component',
  templateUrl: './base-combat-ai-component.component.html',
  styleUrls: ['./base-combat-ai-component.component.css']
})
export class BaseCombatAiComponentComponent implements OnInit {
  _ref: ReplaySubject<number>;
  _id: number;
  $component: ReplaySubject<DB_BaseCombatAIComponent>;

  @Input() set id(value: number) {
    this._ref.next(value);
  }

  get id(): number {
    return this._id;
  }

  constructor(private coreData: LuCoreDataService) {
    this._ref = new ReplaySubject(1);
    this.$component = new ReplaySubject(1);

    this._ref.subscribe(id => this._id = id);
    this._ref.pipe(
      switchMap(ref => this.coreData.getSingleTableEntry("BaseCombatAIComponent", ref))
    ).subscribe(this.$component);
  }

  ngOnInit() {

  }
}
