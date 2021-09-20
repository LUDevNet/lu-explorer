import { Component, Input, OnInit } from '@angular/core';

type BuffKind = "heart" | "imagination" | "armor" | "speed" | "maxinventory";

@Component({
  selector: 'lux-buff',
  templateUrl: './buff.component.html',
  styleUrls: ['./buff.component.css']
})
export class BuffComponent implements OnInit {

  @Input() value?: number;
  @Input() kind: BuffKind;

  constructor() { }

  ngOnInit(): void {
  }

  imgFile(kind: BuffKind): string {
    return {
      "heart": "/lu-res/textures/ui/inventory/common/heart.png",
      "imagination": "/lu-res/textures/ui/inventory/common/imagination.png",
      "armor": "/lu-res/textures/ui/inventory/common/armor.png",
      "speed": "/lu-res/textures/ui/inventory/legs/ag_speedy_pants.png",
      "maxinventory": "/lu-res/textures/ui/rewards/maxinventory.png",
    }[kind];
  }

}
