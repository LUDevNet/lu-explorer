import { Component, OnInit, Input } from '@angular/core';
import { DB_MissionTasks } from '../../../cdclient';

@Component({
  selector: 'app-donation-task',
  templateUrl: './donation-task.component.html',
  styleUrls: ['./donation-task.component.css']
})
export class DonationTaskComponent implements OnInit {

  @Input() task: DB_MissionTasks;

  constructor() { }

  ngOnInit() {
  }

}
