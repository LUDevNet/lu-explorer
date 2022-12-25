import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lux-gate-version-toc',
  templateUrl: './gate-version-toc.component.html',
  styleUrls: ['./gate-version-toc.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GateVersionTocComponent {
  @Input() list: string[]
}
