import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Directive, Injector, Input, Renderer2, OnDestroy } from "@angular/core";
import { ItemTooltipComponent } from "../item-tooltip/item-tooltip.component";
import { SlotComponent } from "../slot/slot.component";
import { TooltipDirective } from "../tooltip.directive";
import { LuCoreDataService } from "../../services";
import { DB_Icons, DB_SkillBehavior } from "../../../defs/cdclient";
import { Subscription } from "rxjs";
import { Locale_SkillBehavior } from "../../../defs/locale";
import { TouchSequence } from "selenium-webdriver";

@Directive({
  selector: "lux-slot[luxFetchSkill]"
})
export class SkillDirective extends TooltipDirective implements OnDestroy {
  private itemTooltipRef: ComponentRef<ItemTooltipComponent>;
  private dataSubscription: Subscription;
  private locSubscription: Subscription;
  private iconSubscription: Subscription;

  @Input("luxFetchSkill") set id(id: number) {
    this.slotComponent.link = `/skills/${id}`;
    this.clear();
    this.itemTooltipRef.instance.id = id;
    this.itemTooltipRef.instance.title = `Skill #${id}`;
    this.dataSubscription = this.luCoreData.getSingleTableEntry<DB_SkillBehavior>("SkillBehavior", id).subscribe(this.onSkill.bind(this));
    this.locSubscription = this.luCoreData.getLocaleSubtree<Locale_SkillBehavior>("SkillBehavior_" + id).subscribe(this.onLocale.bind(this));
  }

  clear() {
    if (this.dataSubscription) this.dataSubscription.unsubscribe();
    if (this.locSubscription) this.locSubscription.unsubscribe();
    if (this.iconSubscription) this.iconSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.clear();
  }

  constructor(
    element: ElementRef<HTMLElement>,
    applicationRef: ApplicationRef,
    renderer: Renderer2,
    injector: Injector,
    resolver: ComponentFactoryResolver,
    private luCoreData: LuCoreDataService,
    private slotComponent: SlotComponent
  ) {
    super(element, applicationRef, renderer, injector, resolver);

    const itemTooltipFactory = resolver.resolveComponentFactory(ItemTooltipComponent);
    this.itemTooltipRef = itemTooltipFactory.create(injector);
    this.content = this.itemTooltipRef;
  }

  onLocale(loc: Locale_SkillBehavior) {
    if (!loc) return;
    if (loc.name) {
      this.itemTooltipRef.instance.title = loc.name;
    }
    this.itemTooltipRef.changeDetectorRef.detectChanges();
  }

  onSkillIcon(icon?: DB_Icons) {
    if (!icon) return;
    this.slotComponent.icon = "/lu-res/textures/ui/" + icon.IconPath.toLowerCase().replace(/dds$/, "png");
  }

  onSkill(skill: DB_SkillBehavior | null) {
    if (!skill) return;
    if (skill.skillIcon > 0) {
      this.iconSubscription = this.luCoreData.getSingleTableEntry<DB_Icons>("Icons", skill.skillIcon).subscribe(this.onSkillIcon.bind(this))
      this.itemTooltipRef.changeDetectorRef.detectChanges();
    }
  }
}
