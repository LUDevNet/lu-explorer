import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { LuCoreDataService } from '../../util/services/lu-core-data.service';

interface TypeData {
  subtypes?: string[];
  mission_ids?: number[];
}
@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.css']
})
export class MissionsByTypeComponent implements OnInit {

  $defined_type: Observable<string>;
  $typeData: Observable<TypeData>;

  constructor(private route: ActivatedRoute, private luCoreDataService: LuCoreDataService) { }

  ngOnInit() {
    this.$defined_type = this.route.paramMap.pipe(map(map => map.get('type')));
    this.$typeData = this.$defined_type.pipe(switchMap(name => {
      return this.luCoreDataService.getRevEntry<TypeData>('mission_types', name);
    }));
  }
}
