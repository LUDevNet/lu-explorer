import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-mission-task',
  templateUrl: './mission-task.component.html',
  styleUrls: ['./mission-task.component.css']
})
export class MissionTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;
  missionList: number[] = [];

  constructor() { }

  ngOnInit() {
    this.missionList = this.task.targetGroup ? this.task.targetGroup.split(',').map(Number) : [];
    this.missionList.push(this.task.target);
  }

}
