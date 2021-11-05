import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-powerup-task',
  templateUrl: './powerup-task.component.html',
  styleUrls: ['./powerup-task.component.css']
})
export class PowerupTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
