import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_Rewards } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

function sortRewards(a: DB_Rewards, b: DB_Rewards): number {
  return a.LevelID - b.LevelID;
}

const UNKNOWN = "[Unknown]";

@Component({
  selector: 'lux-level-rewards',
  templateUrl: './level-rewards.component.html',
  styleUrls: ['./level-rewards.component.css']
})
export class LevelRewardsComponent implements OnInit {

  $list: Observable<DB_Rewards[]>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$list = this.luCoreData
      .getFullTable("Rewards")
      .pipe(map(x => x.sort(sortRewards)));
  }

  typeName(RewardType: number): string {
    return [
      "Item",
      UNKNOWN,
      UNKNOWN,
      UNKNOWN,
      "Backpack Slots",
      UNKNOWN,
      UNKNOWN,
      UNKNOWN,
      UNKNOWN,
      "Permanent Speed Boost",
      UNKNOWN,
      "Life after Smash",
      "Imagination after Smash",
    ][RewardType] || UNKNOWN;
  }

}
