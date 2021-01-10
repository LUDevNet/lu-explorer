import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-gui-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() id: number;
  @Input() amount: number = -1;
  @Input() equipped: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
