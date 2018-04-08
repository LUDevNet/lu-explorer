import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  item: number = 1;

  constructor() { }

  ngOnInit(){}

  select(item: number)
  {
  	this.item = item;
  }

}
