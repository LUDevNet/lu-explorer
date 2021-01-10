import { Component, OnInit, ChangeDetectionStrategy, Input, Directive, ViewChild, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '.tooltip-container'
})
export class TooltipContainerDirective {}

@Component({
  selector: 'lux-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
  top : string = "64px";

  @ViewChild(TooltipContainerDirective, { read: ElementRef })
  private tooltipContainer!: ElementRef;

  constructor( @Inject('tooltipConfig') private config ) {}
  
  ngOnInit() {}

  ngAfterViewInit() {
    // For simplicity, we calculate only the top.
    const { top } = this.config.host.getBoundingClientRect();
    if (this.tooltipContainer) {
      const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();
      //this.top = `${top - height}px`;
    } else {
      console.log(this.tooltipContainer);
    }
  }

}
