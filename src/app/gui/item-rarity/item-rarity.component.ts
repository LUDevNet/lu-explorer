import { Component, Input, OnInit } from '@angular/core';
import { LuResService } from '../../services';

@Component({
  selector: 'lux-item-rarity',
  templateUrl: './item-rarity.component.html',
  styleUrls: ['./item-rarity.component.css']
})
export class ItemRarityComponent implements OnInit {
  @Input() rarity: number;
  private onImg: string;
  private offImg: string;

  constructor(private luRes: LuResService) { }

  ngOnInit(): void {
    this.onImg = this.luRes.getResolvedResUrl('ui/ingame/itemrollover_i8e.png');
    this.offImg = this.luRes.getResolvedResUrl('ui/ingame/itemrollover_i8f.png');
  }

  img(val: number) {
    return (val == this.rarity) ? this.onImg : this.offImg;
  }

}
