import { Component, Input, OnInit } from '@angular/core';
import { LuaStmt, LuaStmtKind, LuaTableConstructorExpression } from '../lua';

@Component({
  selector: 'lua-table-constructor-expression',
  templateUrl: './table-constructor-expression.component.html',
  styleUrls: ['./table-constructor-expression.component.css']
})
export class LuaTableConstructorExpressionComponent implements OnInit {
  @Input() ast: LuaTableConstructorExpression;

  constructor() { }

  ngOnInit(): void {
  }

  isSimple(ast: any): boolean {
    //console.log(ast.type);
    if (['NumericLiteral', 'StringLiteral'].includes(ast.type)) {
      return true;
    } else if (['TableValue'].includes(ast.type)) {
      return this.isSimple(ast.value);
    } else {
      return false;
    }
  }

  innerSimple(ast: LuaStmt): boolean {
    return ast.type == LuaStmtKind.TableConstructorExpression && this.allSimple(ast.fields) ||
      ast.type == LuaStmtKind.TableValue && this.innerSimple(ast.value);
  }

  allSimple(list: any[]): boolean {
    return list.length == 0
      || (list.length == 1 && this.innerSimple(list[0]))
      || list.reduce((acc, ast) => acc && this.isSimple(ast), true);
  }
}
