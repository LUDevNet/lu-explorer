import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Locale_ZoneTable } from '../../../defs/locale';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';

@Component({
  selector: 'app-zone-index',
  templateUrl: './zone-index.component.html',
  styleUrls: ['./zone-index.component.css']
})
export class ZoneIndexComponent implements OnInit {

  $zones: Observable<{ [key: string]: Locale_ZoneTable }>;

  constructor(
    private luCoreData: LuCoreDataService,
  ) { }

  ngOnInit() {
    this.$zones = this.luCoreData.getLocaleSubtree<Locale_ZoneTable>('ZoneTable');
  }
}
