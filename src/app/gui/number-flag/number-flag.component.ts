import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-number-flag',
  templateUrl: './number-flag.component.html',
  styleUrls: ['./number-flag.component.css']
})
export class NumberFlagComponent implements OnInit {
  @Input() name: string;
  @Input() value: number | string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
