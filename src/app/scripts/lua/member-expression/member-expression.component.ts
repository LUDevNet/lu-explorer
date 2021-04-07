import { Component, Input, OnInit } from '@angular/core';
import { LuaMemberExpression } from '../lua';

@Component({
  selector: 'lua-member-expression',
  templateUrl: './member-expression.component.html',
  styleUrls: ['./member-expression.component.css']
})
export class LuaMemberExpressionComponent implements OnInit {
  @Input() ast: LuaMemberExpression;

  constructor() { }

  ngOnInit(): void {
  }

}
