import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-minigame-task',
  templateUrl: './minigame-task.component.html',
  styleUrls: ['./minigame-task.component.css']
})
export class MinigameTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
