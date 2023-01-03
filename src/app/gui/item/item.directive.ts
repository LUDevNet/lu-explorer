import { ApplicationRef, ComponentRef, ElementRef, Directive, Injector, Input, Renderer2, createComponent, EnvironmentInjector } from "@angular/core";
import { ItemTooltipComponent } from "../item-tooltip/item-tooltip.component";
import { SlotComponent } from "../slot/slot.component";
import { TooltipDirective } from "../tooltip.directive";
import { LuCoreDataService, LuJsonService } from "../../services";

@Directive({
  selector: "lux-slot[luxFetchItem]"
})
export class ItemDirective extends TooltipDirective {
  private itemTooltipRef: ComponentRef<ItemTooltipComponent>;

  @Input("luxFetchItem") set id(id: number) {
    this.slotComponent.link = `/objects/${id}`;
    this.itemTooltipRef.instance.id = id;
    this.luJson.getObject(id).subscribe(this.onObject);
  }

  constructor(
    element: ElementRef<HTMLElement>,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
    environmentInjector: EnvironmentInjector,
    private luCoreData: LuCoreDataService,
    private luJson: LuJsonService,
    private slotComponent: SlotComponent
  ) {
    super(element, applicationRef, renderer, injector);

    this.itemTooltipRef = createComponent(ItemTooltipComponent, { environmentInjector });
    this.content = this.itemTooltipRef;
  }

  onObject = (object: any) => {
    if (object.displayName) {
      this.itemTooltipRef.instance.title = object.displayName;
    } else if (object.name) {
      this.itemTooltipRef.instance.title = object.name;
    }

    const renderId = object.components["2"];
    if (renderId) {
      this.luCoreData.getSingleTableEntry("RenderComponent", renderId).subscribe(x => {
        if (x.icon_asset && !x.icon_asset.endsWith('tga')) {
          this.slotComponent.icon = "/lu-res/textures/ui/" + x.icon_asset.toLowerCase().replace(/dds$/, "png")
        }
      });
    }

    this.itemTooltipRef.changeDetectorRef.detectChanges();
  }
}
