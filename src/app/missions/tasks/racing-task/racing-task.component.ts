import { Component, OnInit, Input } from '@angular/core';
import { MissionFragment, MissionTaskFragment } from "generated/graphql";

@Component({
  selector: 'app-racing-task',
  templateUrl: './racing-task.component.html',
  styleUrls: ['./racing-task.component.css']
})
export class RacingTaskComponent implements OnInit {
  @Input() task: MissionTaskFragment;
  targetList: number[] = [];

  ngOnInit() {
    this.targetList = this.task.targetGroup ? this.task.targetGroup.split(',').map(Number) : [];
  }

  mapMissions(missions: {mission?: MissionFragment}[]) : MissionFragment[] {
    return missions.map(x => x.mission);
  }
}
