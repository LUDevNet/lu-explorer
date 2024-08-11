import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-flag-task',
  templateUrl: './flag-task.component.html',
  styleUrls: ['./flag-task.component.css']
})
export class FlagTaskComponent {
  @Input() task: MissionTaskFragment;
}
