import { Component, OnInit, Input, TemplateRef, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { LuaAssignmentStatementComponent } from './assignment-statement/assignment-statement.component';
import { LuaBinaryExpressionComponent } from './binary-expression/binary-expression.component';
import { LuaBooleanLiteralComponent } from './boolean-literal/boolean-literal.component';
import { LuaCallExpressionComponent } from './call-expression/call-expression.component';
import { LuaCallStatementComponent } from './call-statement/call-statement.component';
import { LuaChunkComponent } from './chunk/chunk.component';
import { LuaDirectoryComponent } from './directory/directory.component';
import { LuaElseClauseComponent } from './else-clause/else-clause.component';
import { LuaElseifClauseComponent } from './elseif-clause/elseif-clause.component';
import { LuaForNumericStatementComponent } from './for-numeric-statement/for-numeric-statement.component';
import { LuaFunctionDeclarationComponent } from './function-declaration/function-declaration.component';
import { LuaIdentifierComponent } from './identifier/identifier.component';
import { LuaIfClauseComponent } from './if-clause/if-clause.component';
import { LuaIfStatementComponent } from './if-statement/if-statement.component';
import { LuaIndexExpressionComponent } from './index-expression/index-expression.component';
import { LuaLocalStatementComponent } from './local-statement/local-statement.component';
import { LuaStmt, LuaStmtKind } from './lua';
import { LuaMemberExpressionComponent } from './member-expression/member-expression.component';
import { LuaNilLiteralComponent } from './nil-literal/nil-literal.component';
import { LuaNumericLiteralComponent } from './numeric-literal/numeric-literal.component';
import { LuaReturnStatementComponent } from './return-statement/return-statement.component';
import { LuaStmtDirective } from './stmt.directive';
import { LuaStringLiteralComponent } from './string-literal/string-literal.component';
import { LuaTableCallExpressionComponent } from './table-call-expression/table-call-expression.component';
import { LuaTableConstructorExpressionComponent } from './table-constructor-expression/table-constructor-expression.component';
import { LuaTableKeyStringComponent } from './table-key-string/table-key-string.component';
import { LuaTableKeyComponent } from './table-key/table-key.component';
import { LuaTableValueComponent } from './table-value/table-value.component';
import { LuaTodoComponent } from './todo/todo.component';
import { LuaUnaryExpressionComponent } from './unary-expression/unary-expression.component';
import { LuaVarargLiteralComponent } from './vararg-literal/vararg-literal.component';
import { LuaWhileStatementComponent } from './while-statement/while-statement.component';

interface LuaStmtComponent {
  ast: LuaStmt,
}

const COMPONENTS: { [key: string]: Type<LuaStmtComponent> } = {
  'Directory': LuaDirectoryComponent,
  'Chunk': LuaChunkComponent,
  'AssignmentStatement': LuaAssignmentStatementComponent,
  'BinaryExpression': LuaBinaryExpressionComponent,
  'BooleanLiteral': LuaBooleanLiteralComponent,
  'CallExpression': LuaCallExpressionComponent,
  'CallStatement': LuaCallStatementComponent,
  'ElseifClause': LuaElseifClauseComponent,
  'ElseClause': LuaElseClauseComponent,
  'ForNumericStatement': LuaForNumericStatementComponent,
  'FunctionDeclaration': LuaFunctionDeclarationComponent,
  'Identifier': LuaIdentifierComponent,
  'IfClause': LuaIfClauseComponent,
  'IfStatement': LuaIfStatementComponent,
  'IndexExpression': LuaIndexExpressionComponent,
  'LocalStatement': LuaLocalStatementComponent,
  'LogicalExpression': LuaBinaryExpressionComponent,
  'MemberExpression': LuaMemberExpressionComponent,
  'NilLiteral': LuaNilLiteralComponent,
  'NumericLiteral': LuaNumericLiteralComponent,
  'ReturnStatement': LuaReturnStatementComponent,
  'StringLiteral': LuaStringLiteralComponent,
  'TableCallExpression': LuaTableCallExpressionComponent,
  'TableConstructorExpression': LuaTableConstructorExpressionComponent,
  'TableKey': LuaTableKeyComponent,
  'TableKeyString': LuaTableKeyStringComponent,
  'TableValue': LuaTableValueComponent,
  'UnaryExpression': LuaUnaryExpressionComponent,
  'VarargLiteral': LuaVarargLiteralComponent,
  'WhileStatement': LuaWhileStatementComponent,
}

@Component({
  selector: 'app-lua',
  templateUrl: './lua.component.html',
  styleUrls: ['./lua.component.css']
})
export class LuaComponent implements OnInit {
  @ViewChild(LuaStmtDirective, { static: true }) adHost: LuaStmtDirective;

  private _ast: LuaStmt;

  @Input() set ast(value: LuaStmt) {
    this._ast = value;
    this.loadComponent();
  }

  get ast(): LuaStmt {
    return this._ast;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  loadComponent() {
    const component = COMPONENTS[this._ast.type] || LuaTodoComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<LuaStmtComponent>(componentFactory);
    componentRef.instance.ast = this.ast;
  }
}
