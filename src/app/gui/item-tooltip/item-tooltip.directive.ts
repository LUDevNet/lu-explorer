import { ApplicationRef, ComponentRef, ElementRef, Directive, Injector, Input, Renderer2, createComponent, EnvironmentInjector } from "@angular/core";
import { ItemTooltipComponent } from "./item-tooltip.component";
import { TooltipDirective } from "../tooltip.directive";
import { LuCoreDataService } from "../../services";
import { DB_Objects } from "../../../defs/cdclient";

@Directive({
  selector: "lux-slot[luxItemTooltip]"
})
export class ItemTooltipDirective extends TooltipDirective {
  protected itemTooltipRef: ComponentRef<ItemTooltipComponent>;

  @Input("luxItemTooltip") set id(id: number) {
    this.itemTooltipRef.instance.id = id;
    this.itemTooltipRef.instance.title = "[Unknown]";
  }

  constructor(
    element: ElementRef<HTMLElement>,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
    environmentInjector: EnvironmentInjector,
    protected coreData: LuCoreDataService
  ) {
    super(element, applicationRef, renderer, injector);

    this.itemTooltipRef = createComponent(ItemTooltipComponent, { environmentInjector });
    this.content = this.itemTooltipRef;
  }

  mouseenter() {
    if (this.itemTooltipRef.instance.title == "[Unknown]") {
      this.coreData.getSingleTableEntry('Objects', this.itemTooltipRef.instance.id).subscribe(this.onObjectsRow.bind(this));
    }
    super.mouseenter();
  }

  onObjectsRow(object: DB_Objects) {
    if (object.displayName) {
      this.itemTooltipRef.instance.title = object.displayName;
    } else if (object.name) {
      this.itemTooltipRef.instance.title = object.name;
    }
    this.itemTooltipRef.changeDetectorRef.detectChanges();
  }
}
