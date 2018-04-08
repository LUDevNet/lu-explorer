import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  @Input() pos: any;

  constructor() { }

  ngOnInit() {
  }

}
