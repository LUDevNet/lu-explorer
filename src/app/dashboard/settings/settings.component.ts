import { core } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LuCoreDataService } from '../../services';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  $apiUrl: Observable<string>
  
  newBase: string;
  newUser: string;
  newPass: string;

  constructor(private coreData: LuCoreDataService) {
    this.$apiUrl = this.coreData.$apiUrl.pipe(map(x => x.base));
  }

  ngOnInit(): void { }

  onSet() {
    this.coreData.setApiUrl(this.newBase, this.newUser, this.newPass)
  }

}
