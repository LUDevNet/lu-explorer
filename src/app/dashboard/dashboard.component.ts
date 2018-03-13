import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  baseUrl: string;

  constructor() {
    if (environment.production) {
      // using public API
      this.baseUrl = 'https://xiphoseer.github.io/';
    } else {
      // serving API locally
      this.baseUrl = 'http://localhost:8000/';
    }
  }

  ngOnInit() {
  }

}
