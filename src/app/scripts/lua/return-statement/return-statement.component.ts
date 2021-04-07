import { Component, Input, OnInit } from '@angular/core';
import { LuaReturnStatement } from '../lua';

@Component({
  selector: 'lua-return-statement',
  templateUrl: './return-statement.component.html',
  styleUrls: ['./return-statement.component.css']
})
export class LuaReturnStatementComponent implements OnInit {
  @Input() ast: LuaReturnStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
