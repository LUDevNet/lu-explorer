export enum LuaStmtKind {
    Chunk = "Chunk",
    Directory = "Directory",
    AssignmentStatement = "AssignmentStatement",
    BinaryExpression = "BinaryExpression",
    BooleanLiteral = "BooleanLiteral",
    BreakStatement = "BreakStatement",
    CallExpression = "CallExpression",
    CallStatement = "CallStatement",
    ElseifClause = "ElseifClause",
    ElseClause = "ElseClause",
    ForGenericStatement = "ForGenericStatement",
    ForNumericStatement = "ForNumericStatement",
    FunctionDeclaration = "FunctionDeclaration",
    Identifier = "Identifier",
    IfStatement = "IfStatement",
    IfClause = "IfClause",
    IndexExpression = "IndexExpression",
    LocalStatement = "LocalStatement",
    LogicalExpression = "LogicalExpression",
    MemberExpression = "MemberExpression",
    NilLiteral = "NilLiteral",
    NumericLiteral = "NumericLiteral",
    ReturnStatement = "ReturnStatement",
    StringLiteral = "StringLiteral",
    TableCallExpression = "TableCallExpression",
    TableConstructorExpression = "TableConstructorExpression",
    TableKey = "TableKey",
    TableKeyString = "TableKeyString",
    TableValue = "TableValue",
    UnaryExpression = "UnaryExpression",
    VarargLiteral = "VarargLiteral",
    WhileStatement = "WhileStatement",
}

export interface LuaAssignmentStatement {
    type: LuaStmtKind.AssignmentStatement;
    variables: LuaStmt[];
    init: LuaStmt[];
}

export interface LuaChunk {
    type: LuaStmtKind.Chunk;
    body: LuaStmt;
}

export interface LuaDirectory {
    type: LuaStmtKind.Directory;
    dirs: any[],
    files: any[],
}

export interface LuaBinaryExpression {
    type: LuaStmtKind.BinaryExpression;
    inParens: boolean;
    operator: string;
    left: LuaStmt;
    right: LuaStmt;
}

export interface LuaBooleanLiteral {
    type: LuaStmtKind.BooleanLiteral;
    value: boolean;
}

export interface LuaBreakStatement {
    type: LuaStmtKind.BreakStatement;
}

export interface LuaCallExpression {
    type: LuaStmtKind.CallExpression;
    base: LuaStmt;
    arguments: LuaStmt[];
}

export interface LuaCallStatement {
    type: LuaStmtKind.CallStatement;
    expression: LuaStmt;
}

export interface LuaElseifClause {
    type: LuaStmtKind.ElseifClause;
    condition: LuaStmt;
    body: LuaStmt[];
}

export interface LuaElseClause {
    type: LuaStmtKind.ElseClause;
    body: LuaStmt[];
}

export interface LuaForGenericStatement {
    type: LuaStmtKind.ForGenericStatement;
    variables: LuaStmt[];
    iterators: LuaStmt[];
    body: LuaStmt[];
}

export interface LuaForNumericStatement {
    type: LuaStmtKind.ForNumericStatement;
    variable: LuaStmt;
    start: LuaStmt;
    end: LuaStmt;
    step?: LuaStmt;
    body: LuaStmt[];
}

export interface LuaFunctionDeclaration {
    type: LuaStmtKind.FunctionDeclaration;
    isLocal: boolean;
    identifier: LuaStmt;
    parameters: LuaStmt[];
    body: LuaStmt;
}

export interface LuaIdentifier {
    type: LuaStmtKind.Identifier;
    name: string;
}

export interface LuaIfStatement {
    type: LuaStmtKind.IfStatement;
    clauses: LuaStmt[];
}

export interface LuaIfClause {
    type: LuaStmtKind.IfClause;
    condition: LuaStmt;
    body: LuaStmt[];
}

export interface LuaIndexExpression {
    type: LuaStmtKind.IndexExpression;
    base: LuaStmt;
    index: LuaStmt;
}

export interface LuaLocalStatement {
    type: LuaStmtKind.LocalStatement;
    variables: LuaStmt[];
    init: LuaStmt[];
}

export interface LuaLogicalExpression {
    type: LuaStmtKind.LogicalExpression;
    inParens: boolean;
    operator: string;
    left: LuaStmt;
    right: LuaStmt;
}

export interface LuaMemberExpression {
    type: LuaStmtKind.MemberExpression;
    base: LuaStmt;
    indexer: string;
    identifier: LuaStmt;
}

export interface LuaNilLiteral {
    type: LuaStmtKind.NilLiteral;
}

export interface LuaNumericLiteral {
    type: LuaStmtKind.NumericLiteral;
    value: number;
}

export interface LuaReturnStatement {
    type: LuaStmtKind.ReturnStatement;
    arguments: LuaStmt[];
}

export interface LuaStringLiteral {
    type: LuaStmtKind.StringLiteral;
    value: string;
}

export interface LuaTableCallExpression {
    type: LuaStmtKind.TableCallExpression;
    base: LuaStmt;
    arguments: LuaStmt;
}

export interface LuaTableConstructorExpression {
    type: LuaStmtKind.TableConstructorExpression;
    fields: LuaStmtKind[];
}

export interface LuaTableKey {
    type: LuaStmtKind.TableKey;
    key: LuaStmt;
    value: LuaStmt;
}

export interface LuaTableKeyString {
    type: LuaStmtKind.TableKeyString;
    key: LuaStringLiteral;
    value: LuaStmt;
}

export interface LuaTableValue {
    type: LuaStmtKind.TableValue;
    value: LuaStmt;
}

export interface LuaUnaryExpression {
    type: LuaStmtKind.UnaryExpression;
    operator: string;
    argument: LuaStmt;
}

export interface LuaVarargLiteral {
    type: LuaStmtKind.VarargLiteral;
}

export interface LuaWhileStatement {
    type: LuaStmtKind.WhileStatement;
    condition: LuaStmt;
    body: LuaStmt[];
}

export type LuaStmt = LuaChunk
    | LuaDirectory
    | LuaAssignmentStatement
    | LuaBinaryExpression
    | LuaBooleanLiteral
    | LuaBreakStatement
    | LuaCallExpression
    | LuaCallStatement
    | LuaElseifClause
    | LuaElseClause
    | LuaForNumericStatement
    | LuaForGenericStatement
    | LuaFunctionDeclaration
    | LuaIdentifier
    | LuaIfStatement
    | LuaIfClause
    | LuaIndexExpression
    | LuaLocalStatement
    | LuaLogicalExpression
    | LuaMemberExpression
    | LuaNilLiteral
    | LuaNumericLiteral
    | LuaReturnStatement
    | LuaStringLiteral
    | LuaTableCallExpression
    | LuaTableConstructorExpression
    | LuaTableKey
    | LuaTableKeyString
    | LuaTableValue
    | LuaUnaryExpression
    | LuaVarargLiteral
    | LuaWhileStatement;