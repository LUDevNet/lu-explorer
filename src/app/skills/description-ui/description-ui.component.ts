import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-ui',
  templateUrl: './description-ui.component.html',
  styleUrls: ['./description-ui.component.css']
})
export class DescriptionUiComponent implements OnInit {
  @Input() template?: string;

  constructor() { }

  ngOnInit(): void {
  }

  html(): string {
    if (!this.template) return "";
    return this.template
      .replace("%(AltCombo)", "<b class=\"tooltip-header\">Alt. Combo:</b>")
      .replace("%(ChargeUp)", "<b class=\"tooltip-header\">Charge Up:</b>")
      .replace("%(DamageCombo)", "<b class=\"tooltip-header\">Damage Combo:</b>")
      .replace("%(Description)", "<b class=\"tooltip-header\">Description:</b>");
  }

}
