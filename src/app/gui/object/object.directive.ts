import { ApplicationRef, Directive, ElementRef, HostListener, Injector, Input, Renderer2 } from "@angular/core";
import { LocationStrategy } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TooltipDirective } from "../tooltip.directive";
import { ObjectFragment } from "generated/graphql";

@Directive({
  selector: "a[luxObject]"
})
export class ObjectDirective extends RouterLink {
  private tooltipDirective: TooltipDirective;

  @Input("luxObject") set obj(value: ObjectFragment) {
    this.routerLink = "/objects/" + value.id;
    if (value.displayName) {
      this.element.nativeElement.textContent = value.displayName;
    } else if (value.name) {
      this.element.nativeElement.textContent = value.name;
    } else {
      this.element.nativeElement.textContent = `#${value.id}`;
    }
    if (value.description) {
      this.tooltipDirective.content = value.description;
    } else if (value._internalNotes) {
      this.tooltipDirective.content = value._internalNotes;
    } else {
      this.tooltipDirective.content = null;
    }
  }

  constructor(
    private element: ElementRef<HTMLAnchorElement>,
    router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
  ) {
    super(router, route, "-1", renderer, element, locationStrategy);
    this.tooltipDirective = new TooltipDirective(element, applicationRef, renderer, injector);
  }

  @HostListener('mouseenter')
  mouseenter() {
    this.tooltipDirective.mouseenter();
  }

  @HostListener('mouseout', ['$event.toElement', '$event.relatedTarget'])
  mouseout(toElement, relatedTarget) {
    this.tooltipDirective.mouseout(toElement, relatedTarget);
  }

  ngOnDestroy() {
    this.tooltipDirective.ngOnDestroy();
  }
}
