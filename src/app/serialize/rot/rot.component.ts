import { Component, OnInit, Input } from '@angular/core';


export interface Quaternion {
  w: number,
  x: number,
  y: number,
  z: number,
};

@Component({
  selector: 'app-rot',
  templateUrl: './rot.component.html',
  styleUrls: ['./rot.component.css']
})
export class RotComponent implements OnInit {

  @Input() rot: Quaternion;

  constructor() { }

  ngOnInit() {
  }

}
