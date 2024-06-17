import { ElementRef, Directive, Input } from "@angular/core";
import { IconFragment } from "generated/graphql";

@Directive({
  selector: "img[luxIcon]"
})
export class IconDirective {
  @Input("luxIcon") set icon(value: IconFragment) {
    if (value.IconPath) {
      this.element.nativeElement.src = "/lu-res/textures/ui/" + value.IconPath.toLowerCase().replace(/dds$/, "png");
    }
    if (value.IconName) {
      this.element.nativeElement.title = value.IconName;
      this.element.nativeElement.alt = value.IconName;
    }
  }

  constructor(private element: ElementRef<HTMLImageElement>) {}
}
