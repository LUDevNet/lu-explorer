import { Component, Input, OnInit } from '@angular/core';
import { LuaStringLiteral } from '../lua';

@Component({
  selector: 'lua-string-literal',
  templateUrl: './string-literal.component.html',
  styleUrls: ['./string-literal.component.css']
})
export class LuaStringLiteralComponent implements OnInit {
  @Input() ast: LuaStringLiteral;

  constructor() { }

  ngOnInit(): void {
  }

}
