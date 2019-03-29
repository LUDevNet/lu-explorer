import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scripted-activity-component',
  templateUrl: './scripted-activity-component.component.html',
  styleUrls: ['./scripted-activity-component.component.css']
})
export class ScriptedActivityComponentComponent implements OnInit {

  private component_id;

  @Input() set id(value: number) {
    this.component_id = value;
  }

  get id(): number {
    return this.component_id;
  }

  constructor() { }

  ngOnInit() {
  }

}
