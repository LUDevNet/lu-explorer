import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-pet-task',
  templateUrl: './pet-task.component.html',
  styleUrls: ['./pet-task.component.css']
})
export class PetTaskComponent {
  @Input() task: MissionTaskFragment;
}
