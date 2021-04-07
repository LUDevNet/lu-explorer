import { Component, Input, OnInit } from '@angular/core';
import { LuaTableValue } from '../lua';

@Component({
  selector: 'lua-table-value',
  templateUrl: './table-value.component.html',
  styleUrls: ['./table-value.component.css']
})
export class LuaTableValueComponent implements OnInit {
  @Input() ast: LuaTableValue;

  constructor() { }

  ngOnInit(): void {
  }

}
