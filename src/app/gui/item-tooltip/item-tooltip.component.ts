import { Component, Input } from "@angular/core";

@Component({
  selector: "lux-item-tooltip",
  templateUrl: "./item-tooltip.component.html",
  styleUrls: ["./item-tooltip.component.css"]
})
export class ItemTooltipComponent {
  @Input() title: string;
  @Input() id: number;
}
