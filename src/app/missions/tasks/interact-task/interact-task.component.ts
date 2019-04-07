import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-interact-task',
  templateUrl: './interact-task.component.html',
  styleUrls: ['./interact-task.component.css']
})
export class InteractTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
