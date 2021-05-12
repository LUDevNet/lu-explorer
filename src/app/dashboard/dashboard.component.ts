import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.data.baseUrl;
  }

  ngOnInit() {
    this.http.get('/lu-json/index.json').subscribe(x => console.log(x));
  }

}
