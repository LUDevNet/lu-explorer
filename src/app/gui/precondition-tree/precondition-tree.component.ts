import { Component, Input, OnInit } from '@angular/core';
import { CondAst } from '../../util/pipes/conditions.pipe';

@Component({
  selector: 'lux-precondition-tree',
  templateUrl: './precondition-tree.component.html',
  styleUrls: ['./precondition-tree.component.css']
})
export class PreconditionTreeComponent implements OnInit {
  @Input() ref: CondAst;

  constructor() { }

  ngOnInit(): void {
  }

}
