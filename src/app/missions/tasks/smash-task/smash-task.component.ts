import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-smash-task',
  templateUrl: './smash-task.component.html',
  styleUrls: ['./smash-task.component.css']
})
export class SmashTaskComponent {
  @Input() task: MissionTaskFragment;
}
