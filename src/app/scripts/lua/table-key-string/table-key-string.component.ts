import { Component, Input, OnInit } from '@angular/core';
import { LuaTableKeyString } from '../lua';

@Component({
  selector: 'lua-table-key-string',
  templateUrl: './table-key-string.component.html',
  styleUrls: ['./table-key-string.component.css']
})
export class LuaTableKeyStringComponent implements OnInit {
  @Input() ast: LuaTableKeyString;

  constructor() { }

  ngOnInit(): void {
  }

}
