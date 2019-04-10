import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap, map} from 'rxjs/operators';

import { LuJsonService, LuLocaleService } from '../../../services';
import { DB_ItemSets } from '../../../cdclient';

@Component({
  selector: 'app-item-set-detail',
  templateUrl: './item-set-detail.component.html',
  styleUrls: ['./item-set-detail.component.css']
})
export class ItemSetDetailComponent implements OnInit {

  id: number;
  response: Observable<DB_ItemSets>;

  constructor(
    private luJsonService: LuJsonService,
    private LuLocaleService: LuLocaleService,
    private route: ActivatedRoute
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

  mapToRequest(id) {
    return this.luJsonService.getGeneric(id, 'ItemSets', false);
  }

  tapId(id) {
    this.id = id;
  }

}
