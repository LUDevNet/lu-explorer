import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Rev_FactionById } from '../../../../defs/api';
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

  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(map(p => p.get('id'))).subscribe(this.$id);
    this.$id.pipe(switchMap(id => this.luCoreData.getRevEntry<Rev_FactionById>('factions', id))).subscribe(this.$faction)
  }
}
