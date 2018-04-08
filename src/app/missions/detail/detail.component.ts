import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LuJsonService } from '../../lu-json.service';
import { LocaleService } from '../../locale.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  mission: any;
  missionLocale: any;
  tasks: any;
  text: any;
  textsLocale: any;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute,
  	private luJsonService: LuJsonService, private localeService: LocaleService) { }

  ngOnInit() {
    this.getMission(+this.route.snapshot.paramMap.get('id'));
  }

  getMission(id: number):void {
  	this.id = id;
    this.luJsonService.getMission(this.id).subscribe(mission => this.mission = mission);
    this.luJsonService.getMissionTasks(this.id).subscribe(tasks => this.tasks = tasks.tasks);
    this.luJsonService.getMissionText(this.id).subscribe(text => this.text = text);
    this.localeService.getLocaleEntry("MissionText", this.id).subscribe(entry => this.textsLocale = entry);
    this.localeService.getLocaleEntry("Missions", this.id).subscribe(entry => this.missionLocale = entry);
  }

  load(id: number)
  {
  	this.router.navigate(['/missions/', id]);
  	this.getMission(id);
  }

}
