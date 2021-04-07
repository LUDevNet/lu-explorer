import { Component, Input, OnInit } from '@angular/core';
import { LuaCallExpression } from '../lua';

@Component({
  selector: 'lua-call-expression',
  templateUrl: './call-expression.component.html',
  styleUrls: ['./call-expression.component.css']
})
export class LuaCallExpressionComponent implements OnInit {
  @Input() ast: LuaCallExpression;

  constructor() { }

  ngOnInit(): void {
  }

}
