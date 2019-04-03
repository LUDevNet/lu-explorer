import { Component, OnInit, Input } from '@angular/core';
import { LuJsonService } from '../../../lu-json.service';

@Component({
  selector: 'app-script-component',
  templateUrl: './script-component.component.html',
  styleUrls: ['./script-component.component.css']
})
export class ScriptComponentComponent implements OnInit {

  _id: number;
  _component: any;

  @Input() set id(value: number) {
    console.log("Script", value);
    this._id = value;
    this.getComponent(value);
  }

  get id(): number {
    return this._id;
  }

  get component(): any {
    return this._component || {};
  }

  constructor(private luJsonService: LuJsonService) { }

  ngOnInit() {
  }

  getComponent(id: number): void {
    this._component = undefined;
  	this.luJsonService.getScriptComponent(id)
  	  .subscribe(component => this._component = component);
  }

  link(path: string): string {
    let scr = path.replace(/\\/g, '/').toLowerCase();
    return '/'.concat(scr);
  }
}
