import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lua',
  templateUrl: './lua.component.html',
  styleUrls: ['./lua.component.css']
})
export class LuaComponent implements OnInit {

  private _ast: any;

  @Input() set ast(value: any) {
    this._ast = value;
  }

  get ast(): any {
    return this._ast;
  }

  constructor() { }

  ngOnInit() {
  }

}
