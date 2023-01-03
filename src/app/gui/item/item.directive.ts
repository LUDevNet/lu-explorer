import { ApplicationRef, ComponentRef, ElementRef, Directive, Injector, Input, Renderer2, createComponent, EnvironmentInjector } from "@angular/core";
import { ItemTooltipComponent } from "../item-tooltip/item-tooltip.component";
import { SlotComponent } from "../slot/slot.component";
import { TooltipDirective } from "../tooltip.directive";
import { LuCoreDataService } from "../../services";
import { DB_ComponentsRegistry, DB_Objects } from "../../../defs/cdclient";
import { RENDER_COMPONENT_ID } from "../../../defs/components";

@Directive({
  selector: "lux-slot[luxFetchItem]"
})
export class ItemDirective extends TooltipDirective {
  private itemTooltipRef: ComponentRef<ItemTooltipComponent>;

  @Input("luxFetchItem") set id(id: number) {
    this.slotComponent.link = `/objects/${id}`;
    this.itemTooltipRef.instance.id = id;
    this.coreData.getTableEntry('Objects', id).subscribe(this.onObjectsRow.bind(this));
    this.coreData.getTableEntry('ComponentsRegistry', id).subscribe(this.onObjectComponents.bind(this));
  }

  constructor(
    element: ElementRef<HTMLElement>,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
    environmentInjector: EnvironmentInjector,
    private coreData: LuCoreDataService,
    private slotComponent: SlotComponent
  ) {
    super(element, applicationRef, renderer, injector);

    this.itemTooltipRef = createComponent(ItemTooltipComponent, { environmentInjector });
    this.content = this.itemTooltipRef;
  }

  onObjectsRow(object: DB_Objects) {
    if (object.displayName) {
      this.itemTooltipRef.instance.title = object.displayName;
    } else if (object.name) {
      this.itemTooltipRef.instance.title = object.name;
    }
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
