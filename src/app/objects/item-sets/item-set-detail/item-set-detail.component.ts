import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';

import { LuCoreDataService } from '../../../services';
import { DB_ItemSets } from '../../../../defs/cdclient';

@Component({
  selector: 'app-item-set-detail',
  templateUrl: './item-set-detail.component.html',
  styleUrls: ['./item-set-detail.component.css']
})
export class ItemSetDetailComponent implements OnInit {

  id: number;
  response: Observable<DB_ItemSets>;

  constructor(
    private coreData: LuCoreDataService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.response = this.route.paramMap.pipe(
      map(this.mapRouteParams),
      tap(this.tapId.bind(this)),
      switchMap(this.mapToRequest.bind(this))
    );
  }

  mapRouteParams(map) {
    return +map.get('id');
  }

  mapToRequest(id): Observable<DB_ItemSets> {
    return this.coreData.getSingleTableEntry('ItemSets', id).pipe(map(x => Object.assign(new DB_ItemSets, x)));
  }

  tapId(id) {
    this.id = id;
    this.cd.detectChanges();
  }

}
