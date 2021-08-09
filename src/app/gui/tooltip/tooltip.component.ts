import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, Directive, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'lux-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
  top: number = 10;
  left: number = 10;

  @ViewChild("tooltipContainer")
  private tooltipContainer: ElementRef;

  constructor(@Inject('tooltipConfig') private config, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // position tooltip at top center of host
    const hostRect = this.config.host.getBoundingClientRect();
    this.top = window.scrollY + hostRect.top;
    this.left = window.scrollX + hostRect.left + hostRect.width/2;
    const tooltipRect = this.tooltipContainer.nativeElement.getBoundingClientRect();
    // shift tooltip to be fully above referenced element
    this.top -= tooltipRect.height;
    // shift tooltip to be centered properly
    this.left -= tooltipRect.width/2;
    // clamp to window dimensions to avoid tooltips going out of bounds
    this.left = Math.max(10, Math.min(window.innerWidth - 10 - tooltipRect.width, this.left));
    this.changeDetector.detectChanges();
  }

}
