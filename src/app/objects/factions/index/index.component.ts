import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DB_Factions } from '../../../../defs/cdclient';
import { LuJsonService } from '../../../services';

@Component({
  selector: 'lux-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  $factions: Observable<DB_Factions[]>;

  constructor(private luJson: LuJsonService) { }

  ngOnInit(): void {
    this.$factions = this.luJson.getFactions();
  }

}
