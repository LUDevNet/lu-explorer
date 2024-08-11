import { Component, Input } from '@angular/core';
import { MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-donation-task',
  templateUrl: './donation-task.component.html',
  styleUrls: ['./donation-task.component.css']
})
export class DonationTaskComponent {
  @Input() task: MissionTaskFragment;
}
