import { Component, Input } from "@angular/core";

@Component({
  selector: "lux-item-set",
  templateUrl: "./item-set.component.html",
  styleUrls: ["./item-set.component.css"]
})
export class ItemSetComponent {
  @Input() id: number;
  @Input() rank: number;
  @Input() name: string = "[Unnamed]";
  @Input() icon: string = "/lu-res/textures/ui/inventory/unknown.png";
}
