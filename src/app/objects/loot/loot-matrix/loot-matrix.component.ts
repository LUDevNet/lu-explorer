import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-loot-matrix',
  templateUrl: './loot-matrix.component.html',
  styleUrls: ['./loot-matrix.component.css']
})
export class LootMatrixComponent {
  constructor(private route: ActivatedRoute, private luCoreData: LuCoreDataService) { }
  id$ = this.route.paramMap.pipe(map(p => +p.get('id')));
  matrix$ = this.id$.pipe(switchMap(id => this.luCoreData.getRevEntry('loot_matrix_index', id)));
}
