import { Component, Input, OnInit } from '@angular/core';
import { LuResService } from '../../services';

@Component({
  selector: 'lux-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.css']
})
export class ItemValueComponent implements OnInit {
  @Input() value: number;
  coinImage: string;

  constructor(private luRes: LuResService) { }

  ngOnInit(): void {
    this.coinImage = this.luRes.getResolvedResUrl('ui/ingame/itemrollover_i64.png');
  }

}
