import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { LuaComponent } from './lua/lua.component';
import { ScriptFileComponent } from './script-file/script-file.component';
import { ScriptsComponent } from './scripts.component';
import { UtilModule } from '../util/util.module';
import { LuaDirectoryComponent } from './lua/directory/directory.component';
import { LuaStmtDirective } from './lua/stmt.directive';
import { LuaChunkComponent } from './lua/chunk/chunk.component';
import { LuaTodoComponent } from './lua/todo/todo.component';
import { LuaAssignmentStatementComponent } from './lua/assignment-statement/assignment-statement.component';
import { LuaLocalStatementComponent } from './lua/local-statement/local-statement.component';
import { LuaCallStatementComponent } from './lua/call-statement/call-statement.component';
import { LuaReturnStatementComponent } from './lua/return-statement/return-statement.component';
import { LuaCallExpressionComponent } from './lua/call-expression/call-expression.component';
import { LuaIdentifierComponent } from './lua/identifier/identifier.component';
import { LuaMemberExpressionComponent } from './lua/member-expression/member-expression.component';
import { LuaTableCallExpressionComponent } from './lua/table-call-expression/table-call-expression.component';
import { LuaTableConstructorExpressionComponent } from './lua/table-constructor-expression/table-constructor-expression.component';
import { LuaTableValueComponent } from './lua/table-value/table-value.component';
import { LuaTableKeyComponent } from './lua/table-key/table-key.component';
import { LuaTableKeyStringComponent } from './lua/table-key-string/table-key-string.component';
import { LuaStringLiteralComponent } from './lua/string-literal/string-literal.component';
import { LuaNumericLiteralComponent } from './lua/numeric-literal/numeric-literal.component';
import { LuaNilLiteralComponent } from './lua/nil-literal/nil-literal.component';
import { LuaBooleanLiteralComponent } from './lua/boolean-literal/boolean-literal.component';
import { LuaVarargLiteralComponent } from './lua/vararg-literal/vararg-literal.component';
import { LuaFunctionDeclarationComponent } from './lua/function-declaration/function-declaration.component';
import { LuaWhileStatementComponent } from './lua/while-statement/while-statement.component';
import { LuaForNumericStatementComponent } from './lua/for-numeric-statement/for-numeric-statement.component';
import { LuaIfStatementComponent } from './lua/if-statement/if-statement.component';
import { LuaIfClauseComponent } from './lua/if-clause/if-clause.component';
import { LuaElseifClauseComponent } from './lua/elseif-clause/elseif-clause.component';
import { LuaElseClauseComponent } from './lua/else-clause/else-clause.component';
import { LuaUnaryExpressionComponent } from './lua/unary-expression/unary-expression.component';
import { LuaBinaryExpressionComponent } from './lua/binary-expression/binary-expression.component';
import { LuaIndexExpressionComponent } from './lua/index-expression/index-expression.component';
import { LuaForGenericStatementComponent } from './lua/for-generic-statement/for-generic-statement.component';
import { LuaBreakStatementComponent } from './lua/break-statement/break-statement.component';

@NgModule({
  declarations: [
    LuaComponent,
    ScriptFileComponent,
    ScriptsComponent,
    LuaDirectoryComponent,
    LuaStmtDirective,
    LuaChunkComponent,
    LuaTodoComponent,
    LuaAssignmentStatementComponent,
    LuaLocalStatementComponent,
    LuaCallStatementComponent,
    LuaReturnStatementComponent,
    LuaCallExpressionComponent,
    LuaIdentifierComponent,
    LuaMemberExpressionComponent,
    LuaTableCallExpressionComponent,
    LuaTableConstructorExpressionComponent,
    LuaTableValueComponent,
    LuaTableKeyComponent,
    LuaTableKeyStringComponent,
    LuaStringLiteralComponent,
    LuaNumericLiteralComponent,
    LuaNilLiteralComponent,
    LuaBooleanLiteralComponent,
    LuaVarargLiteralComponent,
    LuaFunctionDeclarationComponent,
    LuaWhileStatementComponent,
    LuaForNumericStatementComponent,
    LuaIfStatementComponent,
    LuaIfClauseComponent,
    LuaElseifClauseComponent,
    LuaElseClauseComponent,
    LuaUnaryExpressionComponent,
    LuaBinaryExpressionComponent,
    LuaIndexExpressionComponent,
    LuaForGenericStatementComponent,
    LuaBreakStatementComponent
  ],
  imports: [
    CommonModule,
    ScriptsRoutingModule,
    UtilModule,
  ]
})
export class ScriptsModule { }
