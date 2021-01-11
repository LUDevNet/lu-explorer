import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-faction-list',
  templateUrl: './faction-list.component.html',
  styleUrls: ['./faction-list.component.css']
})
export class FactionListComponent implements OnInit {
  @Input() list?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
