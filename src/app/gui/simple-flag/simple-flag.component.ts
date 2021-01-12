import { Component, Input, OnInit } from '@angular/core';
import { LuResService } from '../../services';

@Component({
  selector: 'lux-simple-flag',
  templateUrl: './simple-flag.component.html',
  styleUrls: ['./simple-flag.component.css']
})
export class SimpleFlagComponent implements OnInit {
  @Input() name: string;
  @Input() value: boolean;
  @Input() title: string;

  private trueImg: string;
  private falseImg: string;

  constructor(private luRes: LuResService) { }

  ngOnInit(): void {
    this.trueImg = this.luRes.getResolvedResUrl('ui/ingame/propertymanagement_i7.png');
    this.falseImg = this.luRes.getResolvedResUrl('ui/ingame/propertymanagement_i20.png');
  }

  valueImg() {
    return this.value ? this.trueImg : this.falseImg;
  }

}
