import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-item-rarity',
  templateUrl: './item-rarity.component.html',
  styleUrls: ['./item-rarity.component.css']
})
export class ItemRarityComponent implements OnInit {
  @Input() rarity: number;
  private onImg: string;
  private offImg: string;

  constructor() { }

  ngOnInit(): void {
    this.onImg = "/lu-res/ui/ingame/itemrollover_i8e.png";
    this.offImg = "/lu-res/ui/ingame/itemrollover_i8f.png";
  }

  img(val: number) {
    return (val == this.rarity) ? this.onImg : this.offImg;
  }

}
