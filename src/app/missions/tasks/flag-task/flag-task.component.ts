import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-flag-task',
  templateUrl: './flag-task.component.html',
  styleUrls: ['./flag-task.component.css']
})
export class FlagTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
