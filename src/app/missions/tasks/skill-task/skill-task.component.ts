import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-skill-task',
  templateUrl: './skill-task.component.html',
  styleUrls: ['./skill-task.component.css']
})
export class SkillTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
