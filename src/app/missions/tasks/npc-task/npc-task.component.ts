import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-npc-task',
  templateUrl: './npc-task.component.html',
  styleUrls: ['./npc-task.component.css']
})
export class NpcTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
