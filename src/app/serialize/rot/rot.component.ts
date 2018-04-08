import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rot',
  templateUrl: './rot.component.html',
  styleUrls: ['./rot.component.css']
})
export class RotComponent implements OnInit {

  @Input() rot: any;

  constructor() { }

  ngOnInit() {
  }

}
