import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-property-task',
  templateUrl: './property-task.component.html',
  styleUrls: ['./property-task.component.css']
})
export class PropertyTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
