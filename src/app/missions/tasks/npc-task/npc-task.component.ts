import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-npc-task',
  templateUrl: './npc-task.component.html',
  styleUrls: ['./npc-task.component.css']
})
export class NpcTaskComponent {
  @Input() task: MissionTaskFragment;
}
