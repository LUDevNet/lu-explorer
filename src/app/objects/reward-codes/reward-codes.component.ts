import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_RewardCodes } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';
import { ObjectsByComponentComponent } from '../by-component/by-component.component';

type RewardCodeDict = { gate_version: string, codes: DB_RewardCodes[] }[];

function codeSort(a: DB_RewardCodes, b: DB_RewardCodes) {
  return a.code.localeCompare(b.code);
}

interface Locale_RewardCodes {
  subjectText: string,
  bodyText: string,
}

@Component({
  selector: 'lux-reward-codes',
  templateUrl: './reward-codes.component.html',
  styleUrls: ['./reward-codes.component.css']
})
export class RewardCodesComponent implements OnInit {

  $code_groups: Observable<RewardCodeDict>;
  $loc: Observable<{[key: string]: Locale_RewardCodes}>;

  constructor(private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$code_groups = this.luCoreData.getTableEntry<DB_RewardCodes>("RewardCodes", "all").pipe(map(list => {
      let dict: { [key: string]: DB_RewardCodes[] } = {};
      for (let code of list) {
        let gate = code.gate_version || '';
        if (!dict.hasOwnProperty(gate)) {
          dict[gate] = [];
        };
        dict[gate].push(code);
      }
      return Object.keys(dict).sort().map(gate => {
        return { gate_version: gate, codes: dict[gate].sort(codeSort) }
      });
    }));
    this.$loc = this.luCoreData.getLocaleSubtree("RewardCodes");
  }

  loc(key: number): Observable<Locale_RewardCodes> {
    const str = String(key);
    return this.$loc.pipe(map(all => all[str]));
  }

}
