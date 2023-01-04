import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Rev_FactionById } from '../../../../defs/api';
import { DB_Factions } from '../../../../defs/cdclient';
import { DESTRUCTIBLE_COMPONENT_ID } from '../../../../defs/components';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-objects-by-faction',
  templateUrl: './objects-by-faction.component.html',
  styleUrls: ['./objects-by-faction.component.css']
})
export class ObjectsByFactionComponent implements OnInit {
  $id: ReplaySubject<string> = new ReplaySubject(1);
  $faction: ReplaySubject<Rev_FactionById> = new ReplaySubject(1);
  $factionRow: Observable<DB_Factions>;

  constructor(private route: ActivatedRoute, private coreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(map(p => p.get('id'))).subscribe(this.$id);
    this.$id.pipe(switchMap(id => this.coreData.getRevEntry<Rev_FactionById>('factions', id))).subscribe(this.$faction)
    this.$factionRow = this.$id.pipe(switchMap(id => this.coreData.getSingleTableEntry("Factions", id)));
  }
}
