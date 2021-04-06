import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-faction-trigger-component',
  templateUrl: './faction-trigger-component.component.html',
  styleUrls: ['./faction-trigger-component.component.css']
})
export class FactionTriggerComponentComponent implements OnInit {
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
