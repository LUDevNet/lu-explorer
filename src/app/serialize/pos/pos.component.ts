import { Component, OnInit, Input } from '@angular/core';
import { Quaternion } from '../rot/rot.component';
import { Vector3f } from '../v3f/v3f.component';

export interface Position {
  pos: Vector3f,
  rot: Quaternion,
}

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
