import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-smash-task',
  templateUrl: './smash-task.component.html',
  styleUrls: ['./smash-task.component.css']
})
export class SmashTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
