import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DB_DeletionRestrictions } from '../../../defs/cdclient';
import { Locale_DeletionRestrictions } from '../../../defs/locale';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-deletion-restrictions',
  templateUrl: './deletion-restrictions.component.html',
  styleUrls: ['./deletion-restrictions.component.css']
})
export class DeletionRestrictionsComponent implements OnInit {

  constructor(private coreData: LuCoreDataService) { }

  $deletionRestrictions?: Observable<DB_DeletionRestrictions[]>;
  $deletionRestrictionsLocale: Observable<Record<number, Locale_DeletionRestrictions>>;

  ngOnInit(): void {
    this.$deletionRestrictions = this.coreData.getTableEntry<DB_DeletionRestrictions>('DeletionRestrictions', 'all');
    this.$deletionRestrictionsLocale = this.coreData.getLocaleSubtree<Locale_DeletionRestrictions>('DeletionRestrictions');
  }

  split(ids?: string): number[] {
    if (ids) {
      return ids.split(',').map(x => +x.trim());
    } else {
      return [];
    }
  }
}
