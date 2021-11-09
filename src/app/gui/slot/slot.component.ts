import { Component, Input } from "@angular/core";

@Component({
  selector: "lux-slot",
  templateUrl: "./slot.component.html",
  styleUrls: ["./slot.component.css"]
})
export class SlotComponent {
  @Input() count: number = -1;
  @Input() equipped: boolean = false;
  @Input() link: string;
  @Input() icon: string = "/lu-res/textures/ui/inventory/unknown.png";
}
