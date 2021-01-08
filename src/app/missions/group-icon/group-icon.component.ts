import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-icon',
  templateUrl: './group-icon.component.html',
  styleUrls: ['./group-icon.component.css']
})
export class GroupIconComponent implements OnInit {
  @Input() name;

  constructor() { }

  ngOnInit(): void {
  }

  title() {
    return this.name == "LUPs" ? "World Builder League" : this.name;
  }

  image() {
    let file = {
      Location: "i7c",
      General: "i46",
      Battle: "i73",
      Build: "i76",
      Play: "i70",
      Racing: "i79",
      LUPs: "i75",
      Events: "i85"
    }[this.name];
    if (file) return `ui/ingame/passport_${file}.png`;
  }

}
