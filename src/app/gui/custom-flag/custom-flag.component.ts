import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-custom-flag',
  templateUrl: './custom-flag.component.html',
  styleUrls: ['./custom-flag.component.css']
})
export class CustomFlagComponent implements OnInit {

  @Input() meta?: string | number;
  @Input() name: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
