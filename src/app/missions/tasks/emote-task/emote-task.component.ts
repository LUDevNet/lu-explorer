import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-emote-task',
  templateUrl: './emote-task.component.html',
  styleUrls: ['./emote-task.component.css']
})
export class EmoteTaskComponent {
  @Input() task: MissionTaskFragment;
}
