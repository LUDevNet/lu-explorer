import { Component, Input, OnInit } from '@angular/core';
import { LuaBinaryExpression, LuaLogicalExpression } from '../lua';

@Component({
  selector: 'lua-binary-expression',
  templateUrl: './binary-expression.component.html',
  styleUrls: ['./binary-expression.component.css']
})
export class LuaBinaryExpressionComponent implements OnInit {
  @Input() ast: LuaBinaryExpression | LuaLogicalExpression;

  constructor() { }

  ngOnInit(): void {
  }

}
