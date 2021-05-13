import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lux-buff-flag',
  templateUrl: './buff-flag.component.html',
  styleUrls: ['./buff-flag.component.css']
})
export class BuffFlagComponent implements OnInit {
  @Input() name: string;
  @Input() value: number;
  @Input() kind: "heart" | "imagination" | "armor";
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
