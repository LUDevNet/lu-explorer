import { Component, Input, OnInit } from '@angular/core';
import { LuaStmt } from '../lua';

@Component({
  selector: 'lua-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class LuaTodoComponent implements OnInit {

  @Input() ast: LuaStmt;

  constructor() { }

  ngOnInit(): void {
  }

}
