import { ElementRef, Directive, Input } from "@angular/core";
import { LuCoreDataService } from "../../services";
import { DB_Icons } from "../../../defs/cdclient";
import { first } from "rxjs/operators";

@Directive({
  selector: "img[luxFetchIcon]"
})
export class FetchIconDirective {
  @Input("luxFetchIcon") set id(id: number | DB_Icons) {
    if (id != null) {
      if (typeof id === 'number') {
        this.luCoreData.getSingleTableEntry("Icons", id)
          .pipe(first())
          .subscribe(this.onIcon.bind(this, id));
      } else {
        this.onIcon(id.IconID, id)
      }
    }
  }

  constructor(private luCoreData: LuCoreDataService, private element: ElementRef<HTMLImageElement>) { }

  onIcon(id: number, icon: DB_Icons) {
    if (!icon) {
      console.warn("img[luxFetchIcon]", `id=${id}`, "Call returned no icon");
      return;
    }
    if (!icon.IconPath) {
      console.warn("img[luxFetchIcon]", `id=${id}`, `Missing IconPath`);
      return;
    }
    this.element.nativeElement.src = "/lu-res/textures/ui/" + icon.IconPath.toLowerCase().replace(/dds$/, "png");
    if (icon.IconName) {
      this.element.nativeElement.title = icon.IconName;
      this.element.nativeElement.alt = icon.IconName;
    }
  }
}
