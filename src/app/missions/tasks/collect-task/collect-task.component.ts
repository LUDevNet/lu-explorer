import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-collect-task',
  templateUrl: './collect-task.component.html',
  styleUrls: ['./collect-task.component.css']
})
export class CollectTaskComponent {
  @Input() task: MissionTaskFragment;
}
