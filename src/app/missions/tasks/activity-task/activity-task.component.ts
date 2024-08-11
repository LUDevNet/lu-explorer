import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-activity-task',
  templateUrl: './activity-task.component.html',
  styleUrls: ['./activity-task.component.css']
})
export class ActivityTaskComponent {
  @Input() task: MissionTaskFragment;
}
