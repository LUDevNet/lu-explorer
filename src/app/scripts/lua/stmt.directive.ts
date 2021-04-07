import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[luaStmt]'
})
export class LuaStmtDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
