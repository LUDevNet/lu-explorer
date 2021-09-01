import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LuJsonService } from '../../services';
import { DB_LevelProgressionLookup } from '../../cdclient';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-level-progression',
  templateUrl: './level-progression.component.html',
  styleUrls: ['./level-progression.component.css']
})
export class LevelProgressionComponent implements OnInit {

  table: Observable<DB_LevelProgressionLookup[]>;
  error?: any;

  constructor(private luJsonService: LuJsonService, private c: ChangeDetectorRef) { }

  ngOnInit() {
    this.table = this.luJsonService.getSingleTable<DB_LevelProgressionLookup>('LevelProgressionLookup')
      .pipe(catchError(e => {
        this.error = e;
        this.c.detectChanges();
        return of([]);
      }));
  }

}
