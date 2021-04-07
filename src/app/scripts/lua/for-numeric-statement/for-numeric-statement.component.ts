import { Component, Input, OnInit } from '@angular/core';
import { LuaForNumericStatement } from '../lua';

@Component({
  selector: 'lua-for-numeric-statement',
  templateUrl: './for-numeric-statement.component.html',
  styleUrls: ['./for-numeric-statement.component.css']
})
export class LuaForNumericStatementComponent implements OnInit {
  @Input() ast: LuaForNumericStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
