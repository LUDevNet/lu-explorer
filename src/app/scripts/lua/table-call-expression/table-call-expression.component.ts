import { Component, Input, OnInit } from '@angular/core';
import { LuaTableCallExpression } from '../lua';

@Component({
  selector: 'lua-table-call-expression',
  templateUrl: './table-call-expression.component.html',
  styleUrls: ['./table-call-expression.component.css']
})
export class LuaTableCallExpressionComponent implements OnInit {
  @Input() ast: LuaTableCallExpression;

  constructor() { }

  ngOnInit(): void {
  }

}
