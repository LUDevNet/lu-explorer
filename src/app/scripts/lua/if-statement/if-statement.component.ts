import { Component, Input, OnInit } from '@angular/core';
import { LuaIfStatement } from '../lua';

@Component({
  selector: 'lua-if-statement',
  templateUrl: './if-statement.component.html',
  styleUrls: ['./if-statement.component.css']
})
export class LuaIfStatementComponent implements OnInit {
  @Input() ast: LuaIfStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
