import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mission-ref-list',
  templateUrl: './ref-list.component.html',
  styleUrls: ['./ref-list.component.css']
})
export class MissionRefListComponent implements OnInit {

  @Input() ref: any;

  constructor() { }

  ngOnInit() {
  }

}
