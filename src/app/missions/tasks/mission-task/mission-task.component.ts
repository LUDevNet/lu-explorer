import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-mission-task',
  templateUrl: './mission-task.component.html',
  styleUrls: ['./mission-task.component.css']
})
export class MissionTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
