import { Component, Input, OnInit } from '@angular/core';
import { LuaNumericLiteral } from '../lua';

@Component({
  selector: 'lua-numeric-literal',
  templateUrl: './numeric-literal.component.html',
  styleUrls: ['./numeric-literal.component.css']
})
export class LuaNumericLiteralComponent implements OnInit {
  @Input() ast: LuaNumericLiteral;

  constructor() { }

  ngOnInit(): void {
  }

}
