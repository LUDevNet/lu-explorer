import { Component, OnInit, Input } from '@angular/core';
import { MissionTasks } from '../../../../defs/util';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
