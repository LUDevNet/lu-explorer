import { Component, Input } from '@angular/core';
import { MissionPrereqFragment } from "generated/graphql";

@Component({
  selector: 'mission-ref-list',
  templateUrl: './ref-list.component.html',
  styleUrls: ['./ref-list.component.css']
})
export class MissionRefListComponent {
  @Input() prereqs: MissionPrereqFragment[];
}
