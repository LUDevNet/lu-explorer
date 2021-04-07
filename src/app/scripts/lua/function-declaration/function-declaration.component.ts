import { Component, Input, OnInit } from '@angular/core';
import { LuaFunctionDeclaration } from '../lua';

@Component({
  selector: 'lua-function-declaration',
  templateUrl: './function-declaration.component.html',
  styleUrls: ['./function-declaration.component.css']
})
export class LuaFunctionDeclarationComponent implements OnInit {
  @Input() ast: LuaFunctionDeclaration;

  constructor() { }

  ngOnInit(): void {
  }

}
