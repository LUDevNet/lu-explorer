import { ElementRef, Directive, Input } from "@angular/core";
import { LuCoreDataService } from "../../services";
import { DB_Icons } from "../../../defs/cdclient";

@Directive({
  selector: "img[luxFetchIcon]"
})
export class IconDirective {
  @Input("luxFetchIcon") set id(id: number) {
    this.luCoreData.getSingleTableEntry("Icons", id).subscribe(this.onIcon.bind(this));
  }

  constructor(private luCoreData: LuCoreDataService, private element: ElementRef<HTMLImageElement>) {
  }

  onIcon(icon: DB_Icons) {
    this.element.nativeElement.src = "/lu-res/textures/ui/"+icon.IconPath.toLowerCase().replace(/dds$/, "png");
    if (icon.IconName) {
      this.element.nativeElement.title = icon.IconName;
      this.element.nativeElement.alt = icon.IconName;
    }
  }
}
