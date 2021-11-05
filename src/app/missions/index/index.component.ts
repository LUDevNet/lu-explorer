import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuCoreDataService } from '../../util/services/lu-core-data.service';
import { DB_MissionsByType } from '../../util/services/lu-json.service';

type MissionTypes = { [key: string]: string[] };
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MissionIndexComponent implements OnInit {

  missions: any = {};
  mission_types: DB_MissionsByType = {};
  $mission_types: Observable<MissionTypes>;

  constructor(private luCoreDataService: LuCoreDataService) { }

  ngOnInit() {
    this.$mission_types = this.luCoreDataService.getRev<MissionTypes>('mission_types')
  }
}
