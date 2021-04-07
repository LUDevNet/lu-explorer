import { Component, Input, OnInit } from '@angular/core';
import { LuaVarargLiteral } from '../lua';

@Component({
  selector: 'lua-vararg-literal',
  templateUrl: './vararg-literal.component.html',
  styleUrls: ['./vararg-literal.component.css']
})
export class LuaVarargLiteralComponent implements OnInit {
  @Input() ast: LuaVarargLiteral;

  constructor() { }

  ngOnInit(): void {
  }

}
