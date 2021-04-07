import { Component, Input, OnInit } from '@angular/core';
import { LuaElseifClause } from '../lua';

@Component({
  selector: 'lua-elseif-clause',
  templateUrl: './elseif-clause.component.html',
  styleUrls: ['./elseif-clause.component.css']
})
export class LuaElseifClauseComponent implements OnInit {
  @Input() ast: LuaElseifClause;

  constructor() { }

  ngOnInit(): void {
  }

}
