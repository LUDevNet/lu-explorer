import { Component, Input, OnInit } from '@angular/core';
import { LuaIndexExpression } from '../lua';

@Component({
  selector: 'lua-index-expression',
  templateUrl: './index-expression.component.html',
  styleUrls: ['./index-expression.component.css']
})
export class LuaIndexExpressionComponent implements OnInit {
  @Input() ast: LuaIndexExpression;


  constructor() { }

  ngOnInit(): void {
  }

}
