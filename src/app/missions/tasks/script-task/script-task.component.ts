import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-script-task',
  templateUrl: './script-task.component.html',
  styleUrls: ['./script-task.component.css']
})
export class ScriptTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
