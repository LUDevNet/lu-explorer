import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-pet-task',
  templateUrl: './pet-task.component.html',
  styleUrls: ['./pet-task.component.css']
})
export class PetTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
