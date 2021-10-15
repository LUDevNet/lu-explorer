import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DB_ObjectRef_ByComponent } from '../../../cdclient';
import { DESTRUCTIBLE_COMPONENT_ID } from '../../../defs/components';
import { LuJsonService } from '../../../services';

@Component({
  selector: 'lux-objects-by-faction',
  templateUrl: './objects-by-faction.component.html',
  styleUrls: ['./objects-by-faction.component.css']
})
export class ObjectsByFactionComponent implements OnInit {
  $id: ReplaySubject<string> = new ReplaySubject(1);
  $objectsWithDestructible: ReplaySubject<DB_ObjectRef_ByComponent[]> = new ReplaySubject(1);
  $destructibleByFaction: ReplaySubject<Record<string, number[]>> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute, private luJsonService: LuJsonService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(map(p => p.get('id'))).subscribe(this.$id);
    this.luJsonService.getObjectComponent(DESTRUCTIBLE_COMPONENT_ID).subscribe(this.$objectsWithDestructible);
    this.luJsonService.getDestructibleComponentsByFaction().subscribe(this.$destructibleByFaction);
  }

}
