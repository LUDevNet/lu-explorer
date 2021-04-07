import { Component, Input, OnInit } from '@angular/core';
import { LuaUnaryExpression } from '../lua';

@Component({
  selector: 'lua-unary-expression',
  templateUrl: './unary-expression.component.html',
  styleUrls: ['./unary-expression.component.css']
})
export class LuaUnaryExpressionComponent implements OnInit {
  @Input() ast: LuaUnaryExpression;

  constructor() { }

  ngOnInit(): void {
  }

}
