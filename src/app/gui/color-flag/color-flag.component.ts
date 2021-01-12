import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DB_BrickColors } from '../../cdclient';
import { LuJsonService } from '../../services';

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

  constructor(private luJson: LuJsonService) { }

  ngOnInit(): void {
    this.$brickColors = this.luJson.getBrickColors();
  }

}
