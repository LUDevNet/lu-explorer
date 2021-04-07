import { Component, Input, OnInit } from '@angular/core';
import { LuaAssignmentStatement } from '../lua';

@Component({
  selector: 'lua-assignment-statement',
  templateUrl: './assignment-statement.component.html',
  styleUrls: ['./assignment-statement.component.css']
})
export class LuaAssignmentStatementComponent implements OnInit {
  @Input() ast: LuaAssignmentStatement;

  constructor() { }

  ngOnInit(): void {
  }

}
