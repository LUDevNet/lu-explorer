import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rev_Objects } from '../../../../defs/api';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-used-by',
  templateUrl: './used-by.component.html',
  styleUrls: ['./used-by.component.css']
})
export class UsedByComponent implements OnInit {

  @Input()
  rev: Rev_Objects;

  constructor(private luCoreDataService: LuCoreDataService) { }

  ngOnInit(): void {
  }

  $lotsForComponent(id: number, cid: number): Observable<number[]> {
    return this.luCoreDataService.getRevEntry<{ lots: number[] }>('component_types/' + cid, id).pipe(map((x) => x.lots));
  }
}
