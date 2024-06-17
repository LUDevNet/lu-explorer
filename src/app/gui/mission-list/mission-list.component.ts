import { Component, Input } from '@angular/core';
import { MissionFragment } from "generated/graphql";

@Component({
  selector: 'lux-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent {
  @Input() missions: MissionFragment[];

  @Input()
  set ids(value: number[]) {
    this._where = "where m.id in ("+value+")";
  }

  @Input()
  set where(value: string) {
    this._where = "where "+value;
  }

  _where: string = "";
}
