import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-consumable-task',
  templateUrl: './consumable-task.component.html',
  styleUrls: ['./consumable-task.component.css']
})
export class ConsumableTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
