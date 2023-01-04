import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_Factions } from '../../../../defs/cdclient';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  $factions: Observable<DB_Factions[]>;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$factions = this.coreData.getFullTable("Factions");
  }

}
