import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-reputation-task',
  templateUrl: './reputation-task.component.html',
  styleUrls: ['./reputation-task.component.css']
})
export class ReputationTaskComponent {
  @Input() task: MissionTaskFragment;
}
