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
    this.baseUrl = environment.data.baseUrl;
  }

  ngOnInit() {
  }

}
