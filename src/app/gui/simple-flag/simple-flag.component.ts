import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-simple-flag',
  templateUrl: './simple-flag.component.html',
  styleUrls: ['./simple-flag.component.css']
})
export class SimpleFlagComponent implements OnInit {
  @Input() name: string;
  @Input() value: boolean;
  @Input() title: string = "";
  @Input() trueTitle: string = "";
  @Input() falseTitle: string = "";

  private trueImg: string;
  private falseImg: string;

  constructor() { }

  ngOnInit(): void {
    this.trueImg = "/lu-res/ui/ingame/propertymanagement_i7.png";
    this.falseImg = "/lu-res/ui/ingame/propertymanagement_i20.png";
  }

  valueImg() {
    return this.value ? this.trueImg : this.falseImg;
  }

  valueTitle() {
    if (this.title) {
      return this.title;
    }
    if (this.value) {
      return this.trueTitle;
    } else {
      return this.falseTitle;
    }
  }
}
