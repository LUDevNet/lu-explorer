import { ApplicationRef, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, Renderer2, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[luxTooltip]'
})
export class TooltipDirective {
  @Input('luxTooltip') content: string | TemplateRef<any> | ComponentRef<any>;

  private embeddedViewRef?: EmbeddedViewRef<TooltipComponent>;
  private componentRef: ComponentRef<TooltipComponent>;
  private componentType: Type<TooltipComponent>;
  private configInjector: Injector;

  constructor(private element: ElementRef<HTMLElement>,
    private applicationRef: ApplicationRef,
    private renderer: Renderer2,
    private injector: Injector,
  ) {
    this.componentType = TooltipComponent;
    this.configInjector = Injector.create({
      providers: [
        {
          provide: 'tooltipConfig',
          useValue: {
            host: this.element.nativeElement
          }
        }
      ],
      parent: this.injector,
    });
  }

  @HostListener('mouseenter')
  mouseenter() {
    if (this.componentRef || this.content === null) return;
    this.componentRef = //
      this.getRootViewContainerRef().createComponent(this.componentType, {
        index: 0,
        injector: this.configInjector,
        projectableNodes: this.generateNgContent(),
      });
  }

  getRootViewContainerRef(): ViewContainerRef {
    const appInstance = this.applicationRef.components[0].instance;

    if (!appInstance.viewContainerRef) {
      const appName = this.applicationRef.componentTypes[0].name;
      throw new Error(`Missing 'viewContainerRef' declaration in ${appName} constructor`);
    }

    return appInstance.viewContainerRef;
  }

  generateNgContent() {
    if (typeof this.content === 'string') {
      const element = this.renderer.createText(this.content);
      return [[element]];
    }

    if (this.content instanceof TemplateRef) {
      //console.log(this.content);
      //const context = { id: 100 };
      this.embeddedViewRef = this.content.createEmbeddedView(this.element);
      // In earlier versions, you may need to add this line
      // this.applicationRef.attachView(this.embeddedViewRef);
      this.embeddedViewRef.detectChanges();
      return [this.embeddedViewRef.rootNodes];
    }

    // Else it's a component ref
    return [[this.content.location.nativeElement]];
  }

  @HostListener('mouseout', ['$event.toElement', '$event.relatedTarget'])
  mouseout(toElement, relatedTarget) {
    let e = toElement || relatedTarget;
    if (!this.element.nativeElement.contains(e)) {
      this.destroy();
    }
  }

  destroy() {
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
    this.embeddedViewRef = null;
  }

  ngOnDestroy() {
    this.destroy();
  }

  ngDoCheck() {
    if (this.embeddedViewRef) this.embeddedViewRef.detectChanges();
  }
}
