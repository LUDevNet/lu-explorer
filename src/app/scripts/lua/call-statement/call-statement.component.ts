import { Component, Input, OnInit } from '@angular/core';
import { LuaCallStatement } from '../lua';

@Component({
  selector: 'lua-call-statement',
  templateUrl: './call-statement.component.html',
  styleUrls: ['./call-statement.component.css']
})
export class LuaCallStatementComponent implements OnInit {
  @Input() ast: LuaCallStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
