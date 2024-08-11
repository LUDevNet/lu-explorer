import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-minigame-task',
  templateUrl: './minigame-task.component.html',
  styleUrls: ['./minigame-task.component.css']
})
export class MinigameTaskComponent {
  @Input() task: MissionTaskFragment;
}
