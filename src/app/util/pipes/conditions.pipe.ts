import { Pipe, PipeTransform } from '@angular/core';

export interface CondAst {
  type: string,
  value: any,
}

@Pipe({ name: 'condast' })
export class CondAstPipe implements PipeTransform {
  transform(value, args: string[]): any {
    return parsePrereqString(value);
  }
}

function parsePrereqString(prereq: any): any
{
  if (prereq) {
    let tokens = tokenizePrereqString(prereq);
    let tree = checkPrereqNesting(tokens);
    let parse = parseMissionString(tree);
    return parse;
  }
  return null;
}

function tokenizePrereqString(prereq: string): Array<string>
{
  var res = [];
  var buf = "";
  for (var i = 0; i < prereq.length; i++) {
    let c = prereq.charAt(i);
    if (c == ' ') {
      continue;
    } else if ([';', ',', '(', ')', '|', '&'].includes(c)) {
      if (buf) {
        res.push(buf);
      }
      res.push(['&', ';'].includes(c) ? ',' : c);
      buf = "";
    } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(c)) {
      buf += c;
    } else {
      throw SyntaxError("Unexpected character '" + c + "' in '" + prereq + "'");
    }
  }

  if (buf) res.push(buf);

  return res;
}

function checkPrereqNesting(tokens: Array<String>): any {
  var stack = [];
  var buf = [];
  for (var i = 0; i < tokens.length; i++) {
    let t = tokens[i];
    if (t == '(') {
      stack.push(buf);
      buf = [];
    } else if (t == ')') {
      if (stack.length == 0) {
        throw SyntaxError("Mismatched parentheses in '" + tokens.join('.') + "'");
      } else {
        let temp = stack.pop();
        temp.push(buf);
        buf = temp;
      }
    } else {
      buf.push(t);
    }
  }
  return buf;
}

function parseMissionStringElem(e: any): any {
  return Array.isArray(e) ? parseMissionString(e) : {type: "lit", value: Number(e)};
}

function parseMissionString(ast: any): any {
  if (ast.length == 0) {
    throw SyntaxError("Mission AST may not be empty");
  } else if (ast.length == 1) {
    return {type: "lit", value: Number(ast[0])};
  } else if (ast.length % 2 == 0) {
    throw SyntaxError("Mission AST must have uneven number of elements");
  } else {
    let op = ast[1];
    if (op != "," && op != '|') {
      throw SyntaxError("Invalid operation " + op);
    }
    let item1 = parseMissionStringElem(ast[0]);
    let item2 = parseMissionStringElem(ast[2]);
    var items = [item1, item2];
    for (var i = 3; i < ast.length; i += 2) {
      if (ast[i] != ast[1]) {
        throw SyntaxError("Mission AST can only have one operation per level")
      }
      items.push(parseMissionStringElem(ast[i+1]));
    }
    return {"type": op, value: items};
  }
}