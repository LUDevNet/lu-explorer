import { ApplicationRef, ElementRef, Directive, Injector, Input, Renderer2, EnvironmentInjector } from "@angular/core";
import { ItemTooltipDirective } from "../item-tooltip/item-tooltip.directive";
import { SlotComponent } from "../slot/slot.component";
import { LuCoreDataService } from "../../services";
import { ItemFragment } from "generated/graphql";

@Directive({
  selector: "lux-slot[luxItem]"
})
export class ItemDirective extends ItemTooltipDirective {
  @Input("luxItem") set item(value: ItemFragment) {
    super.id = value.id;
    this.slotComponent.link = `/objects/${value.id}`;
    let icon = value.renderComponent.icon_asset;
    this.slotComponent.icon = "/lu-res/textures/ui/" + (icon ? icon : "inventory/unknown.png").toLowerCase().replace(/dds$/, "png");
  }

  constructor(
    element: ElementRef<HTMLElement>,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
    environmentInjector: EnvironmentInjector,
    protected coreData: LuCoreDataService,
    private slotComponent: SlotComponent
  ) {
    super(element, applicationRef, renderer, injector, environmentInjector, coreData);
  }
}
