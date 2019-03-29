import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LuJsonService } from '../../lu-json.service';
import { LocaleService } from '../../locale.service';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  mission: any;
  missionLocale: any;
  tasks: any;
  tasksLocale: any;
  text: any;
  textsLocale: any;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute,
  	private luJsonService: LuJsonService, private localeService: LocaleService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => this.getMission(+map.get('id')));
  }

  getMission(id: number):void {
  	this.id = id;
    this.luJsonService.getMission(this.id).subscribe(mission => this.mission = mission);
    this.luJsonService.getMissionTasks(this.id).subscribe(this.processMissionTasks.bind(this));
    this.luJsonService.getMissionText(this.id).subscribe(text => this.text = text);
    this.localeService.getLocaleEntry("MissionText", this.id).subscribe(entry => this.textsLocale = entry);
    this.localeService.getLocaleEntry("Missions", this.id).subscribe(entry => this.missionLocale = entry);
  }

  processMissionTasks(tasks: any) {
    let taskArray = tasks.tasks.filter(task => task);
    taskArray.forEach(task => this.localeService
      .getLocaleEntry("MissionTasks", task.uid)
      .subscribe(entry => task.localizations = entry))
    this.tasks = taskArray;
  }

  parsePrereqString(prereq: any): any
  {
    if (prereq) {
      let tokens = this.tokenizePrereqString(prereq);
      let tree = this.checkPrereqNesting(tokens);
      let parse = this.parseMissionString(tree);
      return parse;
    }
    return null;
  }

  tokenizePrereqString(prereq: string): Array<string>
  {
    var res = [];
    var buf = "";
    for (var i = 0; i < prereq.length; i++) {
      let c = prereq.charAt(i);
      if (c == ' ') {
        continue;
      } else if ([',', '(', ')', '|', '&'].includes(c)) {
        if (buf) {
          res.push(buf);
        }
        res.push(c == '&' ? ',' : c);
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

  checkPrereqNesting(tokens: Array<String>): any {
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

  parseMissionStringElem(e: any): any {
    return Array.isArray(e) ? this.parseMissionString(e) : {type: "lit", value: Number(e)};
  }

  parseMissionString(ast: any): any {
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
      let item1 = this.parseMissionStringElem(ast[0]);
      let item2 = this.parseMissionStringElem(ast[2]);
      var items = [item1, item2];
      for (var i = 3; i < ast.length; i += 2) {
        if (ast[i] != ast[1]) {
          throw SyntaxError("Mission AST can only have one operation per level")
        }
        items.push(this.parseMissionStringElem(ast[i+1]));
      }
      return {"type": op, value: items};
    }
  }

}
