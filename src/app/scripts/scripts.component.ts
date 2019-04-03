import { Component, OnInit } from '@angular/core';
import { LuJsonService } from '../lu-json.service';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.css']
})
export class ScriptsComponent implements OnInit {

  index: any;

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
    this.luJsonService
      .getScript('index')
      .subscribe(index => this.index = index)
  }

}
