import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-script-task',
  templateUrl: './script-task.component.html',
  styleUrls: ['./script-task.component.css']
})
export class ScriptTaskComponent {
  @Input() task: MissionTaskFragment;
}
