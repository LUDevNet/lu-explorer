import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LuJsonService, LuLocaleService } from '../../services';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  mission: any;
  missionLocale: any;
  tasks: any;
  tasksLocale: any;
  text: any;
  textsLocale: any;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute,
  	private luJsonService: LuJsonService, private luLuLocaleService: LuLocaleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => this.getMission(+map.get('id')));
  }

  getMission(id: number):void {
  	this.id = id;
    this.luJsonService.getMission(this.id).subscribe(mission => this.mission = mission);
    this.luJsonService.getMissionTasks(this.id).subscribe(this.processMissionTasks.bind(this));
    this.luJsonService.getMissionText(this.id).subscribe(text => this.text = text);
    this.luLuLocaleService.getLocaleEntry("MissionText", this.id).subscribe(entry => this.textsLocale = entry);
    this.luLuLocaleService.getLocaleEntry("Missions", this.id).subscribe(entry => this.missionLocale = entry);
  }

  processMissionTasks(tasks: any) {
    let taskArray = tasks.tasks.filter(task => task);
    taskArray.forEach(task => this.luLuLocaleService
      .getLocaleEntry("MissionTasks", task.uid)
      .subscribe(entry => task.localizations = entry))
    this.tasks = taskArray;
  }

}
