import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-gate-version-tag',
  templateUrl: './gate-version-tag.component.html',
  styleUrls: ['./gate-version-tag.component.css']
})
export class GateVersionTagComponent {
  @Input()
  gate_version?: string;
}
