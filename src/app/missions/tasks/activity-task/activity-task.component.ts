import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-activity-task',
  templateUrl: './activity-task.component.html',
  styleUrls: ['./activity-task.component.css']
})
export class ActivityTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
