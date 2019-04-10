import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-cast-type',
  templateUrl: './skill-cast-type.component.html',
  styleUrls: ['./skill-cast-type.component.css']
})
export class SkillCastTypeComponent implements OnInit {

  @Input() castType: number;

  constructor() { }

  ngOnInit() {
  }

}
