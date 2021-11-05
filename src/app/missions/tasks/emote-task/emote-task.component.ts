import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-emote-task',
  templateUrl: './emote-task.component.html',
  styleUrls: ['./emote-task.component.css']
})
export class EmoteTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;
  
  constructor() { }

  ngOnInit() {
  }

}
