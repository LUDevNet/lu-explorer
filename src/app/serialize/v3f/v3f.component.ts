import { Component, OnInit, Input } from '@angular/core';

export interface Vector3f {
  x: number,
  y: number,
  z: number,
};

@Component({
  selector: 'app-v3f',
  templateUrl: './v3f.component.html',
  styleUrls: ['./v3f.component.css']
})
export class V3fComponent implements OnInit {

  @Input() v3f: Vector3f;

  constructor() { }

  ngOnInit() {
  }

}
