import { Component, Input, OnInit } from '@angular/core';
import { LuaWhileStatement } from '../lua';

@Component({
  selector: 'lua-while-statement',
  templateUrl: './while-statement.component.html',
  styleUrls: ['./while-statement.component.css']
})
export class LuaWhileStatementComponent implements OnInit {
  @Input() ast: LuaWhileStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
