import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../../defs/cdclient';

@Component({
  selector: 'app-poi-task',
  templateUrl: './poi-task.component.html',
  styleUrls: ['./poi-task.component.css']
})
export class PoiTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
