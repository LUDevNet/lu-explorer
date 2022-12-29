import { Component, HostBinding, Input } from "@angular/core";
import { DB_Icons } from "../../../defs/cdclient";

@Component({
  selector: "lux-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.css"]
})
export class MissionComponent {
  @Input() id: number;
  @Input() isMission: boolean = true;
  @Input() iconID: number | DB_Icons;
  @Input() title: string;
  @Input() tooltip: string;
  @HostBinding("style.order")
  @Input() sortOrder: number = 0;
  @Input() status: number = 4;
}
