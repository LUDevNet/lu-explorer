import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LuResService } from '../../services';

@Component({
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  $credits: Observable<XMLDocument>;

  constructor(private luRes: LuResService) { }

  ngOnInit(): void {
    this.$credits = this.luRes.getXML('ui/credits/creditslist');
  }

  iter(c: HTMLCollection): Element[] {
    return Array.from(c);
  }

}
