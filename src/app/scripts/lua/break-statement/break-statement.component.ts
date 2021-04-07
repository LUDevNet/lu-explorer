import { Component, Input, OnInit } from '@angular/core';
import { LuaBreakStatement } from '../lua';

@Component({
  selector: 'lua-break-statement',
  templateUrl: './break-statement.component.html',
  styleUrls: ['./break-statement.component.css']
})
export class LuaBreakStatementComponent implements OnInit {
  @Input() ast: LuaBreakStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
