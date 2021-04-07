import { Component, Input, OnInit } from '@angular/core';
import { LuaChunk } from '../lua';

@Component({
  selector: 'lua-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.css']
})
export class LuaChunkComponent implements OnInit {
  @Input() ast: LuaChunk;

  constructor() { }

  ngOnInit(): void {
  }

}
