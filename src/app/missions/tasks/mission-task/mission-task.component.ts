import { Component, Input } from '@angular/core';
import { MissionFragment, MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-mission-task',
  templateUrl: './mission-task.component.html',
  styleUrls: ['./mission-task.component.css']
})
export class MissionTaskComponent {
  @Input() task: MissionTaskFragment;

  mapMissions(missions: {mission?: MissionFragment}[]) : MissionFragment[] {
    return missions.map(x => x.mission);
  }
}
