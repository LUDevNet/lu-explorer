import { Component, Input, OnInit } from '@angular/core';
import { LuaBooleanLiteral } from '../lua';

@Component({
  selector: 'lua-boolean-literal',
  templateUrl: './boolean-literal.component.html',
  styleUrls: ['./boolean-literal.component.css']
})
export class LuaBooleanLiteralComponent implements OnInit {
  @Input() ast: LuaBooleanLiteral;

  constructor() { }

  ngOnInit(): void {
  }

}
