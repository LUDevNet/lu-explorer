import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-property-task',
  templateUrl: './property-task.component.html',
  styleUrls: ['./property-task.component.css']
})
export class PropertyTaskComponent {
  @Input() task: MissionTaskFragment;
}
