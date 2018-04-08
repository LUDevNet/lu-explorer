import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-v3f',
  templateUrl: './v3f.component.html',
  styleUrls: ['./v3f.component.css']
})
export class V3fComponent implements OnInit {

  @Input() v3f: any;

  constructor() { }

  ngOnInit() {
  }

}
