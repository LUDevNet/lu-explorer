import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-interact-task',
  templateUrl: './interact-task.component.html',
  styleUrls: ['./interact-task.component.css']
})
export class InteractTaskComponent {
  @Input() task: MissionTaskFragment;
}
