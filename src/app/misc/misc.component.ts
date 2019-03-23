import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  type: string;
  private defaultType: string = 'acc-default-loc';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe(this.processRouteChange.bind(this));
  }

  processRouteChange(map) {
    if (map.has('type')) {
      this.type = map.get('type');
    } else {
      this.type = this.defaultType;
    }
  }

}
