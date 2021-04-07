import { Component, Input, OnInit } from '@angular/core';
import { LuaIdentifier } from '../lua';

@Component({
  selector: 'lua-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.css']
})
export class LuaIdentifierComponent implements OnInit {
  @Input() ast: LuaIdentifier;

  constructor() { }

  ngOnInit(): void {
  }

}
