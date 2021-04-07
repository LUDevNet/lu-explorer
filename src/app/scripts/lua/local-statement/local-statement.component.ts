import { Component, Input, OnInit } from '@angular/core';
import { LuaLocalStatement } from '../lua';

@Component({
  selector: 'lua-local-statement',
  templateUrl: './local-statement.component.html',
  styleUrls: ['./local-statement.component.css']
})
export class LuaLocalStatementComponent implements OnInit {
  @Input() ast: LuaLocalStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
