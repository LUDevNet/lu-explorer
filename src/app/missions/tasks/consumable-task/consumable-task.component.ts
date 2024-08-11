import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-consumable-task',
  templateUrl: './consumable-task.component.html',
  styleUrls: ['./consumable-task.component.css']
})
export class ConsumableTaskComponent {
  @Input() task: MissionTaskFragment;
}
