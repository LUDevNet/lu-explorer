import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LuJsonService } from '../../lu-json.service';
import { LocaleService } from '../../locale.service';
import { component_names } from '../../components';


@Component({
  selector: 'app-object-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ObjectDetailComponent implements OnInit {

  object: any;
  objectLocale: any;
  component_id: number;

  constructor(private route: ActivatedRoute,
  	private luJsonService: LuJsonService,
    private localeService: LocaleService) { }

  ngOnInit()
  {
    this.getObject();
  }

  getObject():void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.luJsonService.getObject(id).subscribe(object => this.loadObject(object));
    this.localeService.getLocaleEntry("Objects", id).subscribe(entry => this.objectLocale = entry);
  }

  loadObject(object: any): void
  {
    this.object = object;
  }

  selectComponent(id: number)
  {
    this.component_id = id;
  }

  getName(id: number)
  {
    console.log("Test");
    return component_names[id];
  }

}
