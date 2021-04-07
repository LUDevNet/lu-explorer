import { Component, Input, OnInit } from '@angular/core';
import { LuaNilLiteral } from '../lua';

@Component({
  selector: 'lua-nil-literal',
  templateUrl: './nil-literal.component.html',
  styleUrls: ['./nil-literal.component.css']
})
export class LuaNilLiteralComponent implements OnInit {
  @Input() ast: LuaNilLiteral;

  constructor() { }

  ngOnInit(): void {
  }

}
