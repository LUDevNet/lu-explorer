import { Component, OnInit, Input } from '@angular/core';
import { component_names } from '../../../components';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

  @Input() id: number;
  @Input() component_id: number;

  constructor() { }

  ngOnInit() {
  }

  getName(id: number)
  {
    return component_names[id];
  }

}
