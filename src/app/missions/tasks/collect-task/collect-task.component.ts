import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-collect-task',
  templateUrl: './collect-task.component.html',
  styleUrls: ['./collect-task.component.css']
})
export class CollectTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;
  
  constructor() { }

  ngOnInit() {
  }

}
