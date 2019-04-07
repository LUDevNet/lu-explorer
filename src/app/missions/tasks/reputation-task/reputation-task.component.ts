import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-reputation-task',
  templateUrl: './reputation-task.component.html',
  styleUrls: ['./reputation-task.component.css']
})
export class ReputationTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
