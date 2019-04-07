import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-racing-task',
  templateUrl: './racing-task.component.html',
  styleUrls: ['./racing-task.component.css']
})
export class RacingTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
