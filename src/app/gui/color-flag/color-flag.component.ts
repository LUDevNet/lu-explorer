import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_BrickColors } from '../../../defs/cdclient';
import { LuCoreDataService } from '../../services';

@Component({
  selector: 'lux-color-flag',
  templateUrl: './color-flag.component.html',
  styleUrls: ['./color-flag.component.css']
})
export class ColorFlagComponent implements OnInit {
  @Input() name: string;
  @Input() value: number;
  @Input() title: string;

  $brickColors: Observable<DB_BrickColors[]>;

  constructor(private coreData: LuCoreDataService) { }

  ngOnInit(): void {
    this.$brickColors = this.coreData.getFullTable("BrickColors");
  }

}
