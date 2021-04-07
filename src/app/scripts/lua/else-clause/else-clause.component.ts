import { Component, Input, OnInit } from '@angular/core';
import { LuaElseClause } from '../lua';

@Component({
  selector: 'lua-else-clause',
  templateUrl: './else-clause.component.html',
  styleUrls: ['./else-clause.component.css']
})
export class LuaElseClauseComponent implements OnInit {
  @Input() ast: LuaElseClause;

  constructor() { }

  ngOnInit(): void {
  }

}
