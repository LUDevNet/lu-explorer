import { ApplicationRef, ElementRef, Directive, Injector, Input, Renderer2, EnvironmentInjector } from "@angular/core";
import { ItemTooltipDirective } from "../item-tooltip/item-tooltip.directive";
import { SlotComponent } from "../slot/slot.component";
import { LuCoreDataService } from "../../services";
import { DB_ComponentsRegistry } from "../../../defs/cdclient";
import { RENDER_COMPONENT_ID } from "../../../defs/components";

@Directive({
  selector: "lux-slot[luxFetchItem]"
})
export class FetchItemDirective extends ItemTooltipDirective {
  @Input("luxFetchItem") set id(id: number) {
    super.id = id;
    this.slotComponent.link = `/objects/${id}`;
    this.coreData.getTableEntry('ComponentsRegistry', id).subscribe(this.onObjectComponents.bind(this));
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

  onObjectComponents(components: DB_ComponentsRegistry[]) {
    const renderId = components.find(c => c.component_type == RENDER_COMPONENT_ID)?.component_id;
    if (renderId) {
      this.coreData.getSingleTableEntry("RenderComponent", renderId).subscribe(x => {
        if (x.icon_asset && !x.icon_asset.endsWith('tga')) {
          this.slotComponent.icon = "/lu-res/textures/ui/" + x.icon_asset.toLowerCase().replace(/dds$/, "png")
        }
      });
    }
    this.itemTooltipRef.changeDetectorRef.detectChanges();
  }
}
