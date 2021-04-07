import { Component, Input, OnInit } from '@angular/core';
import { LuaForGenericStatement } from '../lua';

@Component({
  selector: 'lua-for-generic-statement',
  templateUrl: './for-generic-statement.component.html',
  styleUrls: ['./for-generic-statement.component.css']
})
export class LuaForGenericStatementComponent implements OnInit {
  @Input() ast: LuaForGenericStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
