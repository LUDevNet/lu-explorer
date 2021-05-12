import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-item-value',
  templateUrl: './item-value.component.html',
  styleUrls: ['./item-value.component.css']
})
export class ItemValueComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
