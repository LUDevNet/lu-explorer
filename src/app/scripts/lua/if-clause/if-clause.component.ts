import { Component, Input, OnInit } from '@angular/core';
import { LuaIfClause } from '../lua';

@Component({
  selector: 'lua-if-clause',
  templateUrl: './if-clause.component.html',
  styleUrls: ['./if-clause.component.css']
})
export class LuaIfClauseComponent implements OnInit {
  @Input() ast: LuaIfClause;

  constructor() { }

  ngOnInit(): void {
  }

}
