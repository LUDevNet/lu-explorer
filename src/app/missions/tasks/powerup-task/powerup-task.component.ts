import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-powerup-task',
  templateUrl: './powerup-task.component.html',
  styleUrls: ['./powerup-task.component.css']
})
export class PowerupTaskComponent {
  @Input() task: MissionTaskFragment;
}
