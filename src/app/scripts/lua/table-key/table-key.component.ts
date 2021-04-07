import { Component, Input, OnInit } from '@angular/core';
import { LuaTableKey } from '../lua';

@Component({
  selector: 'lua-table-key',
  templateUrl: './table-key.component.html',
  styleUrls: ['./table-key.component.css']
})
export class LuaTableKeyComponent implements OnInit {
  @Input() ast: LuaTableKey;

  constructor() { }

  ngOnInit(): void {
  }

}
