import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-poi-task',
  templateUrl: './poi-task.component.html',
  styleUrls: ['./poi-task.component.css']
})
export class PoiTaskComponent {
  @Input() task: MissionTaskFragment;
}
