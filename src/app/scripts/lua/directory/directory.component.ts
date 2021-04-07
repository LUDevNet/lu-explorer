import { Component, Input, OnInit } from '@angular/core';
import { LuaDirectory } from '../lua';

@Component({
  selector: 'lua-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class LuaDirectoryComponent implements OnInit {

  @Input() ast: LuaDirectory;

  constructor() { }

  ngOnInit(): void {
  }

}
