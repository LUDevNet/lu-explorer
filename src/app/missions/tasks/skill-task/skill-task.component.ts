import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-skill-task',
  templateUrl: './skill-task.component.html',
  styleUrls: ['./skill-task.component.css']
})
export class SkillTaskComponent {
  @Input() task: MissionTaskFragment;

  skills(): number[] {
    return this.task.taskParam1.split(',').map(x => +x);
  }
}
