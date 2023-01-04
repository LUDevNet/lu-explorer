import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_MinifigComponent, DB_MinifigDecals_Torsos } from '../../../../defs/cdclient';
import { LuCoreDataService } from '../../../services';

@Component({
  selector: 'lux-minifig-component',
  templateUrl: './minifig-component.component.html',
  styleUrls: ['./minifig-component.component.css']
})
export class MinifigComponentComponent implements OnInit, OnChanges {
  @Input() id;
  $component?: Observable<DB_MinifigComponent>;
  $torso?: Observable<DB_MinifigDecals_Torsos>;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$component = this.coreData.getSingleTableEntry("MinifigComponent", this.id);
    this.$component.subscribe(minifig => {
      this.$torso = this.coreData.getSingleTableEntry('MinifigDecals_Torsos', minifig.chestdecal);
    });
  }

  ngOnChanges(): void {
    // Re-Initialize
    this.ngOnInit();
  }

}
