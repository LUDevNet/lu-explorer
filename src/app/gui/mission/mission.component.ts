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
  /// Either iconID or icon must be provided. If possible do a bulk lookup of icon ID -> icon path on the DB side, this is much more efficient than specificing iconID for multiple missions.
  @Input() iconID: number | DB_Icons;
  /// Image path, fully resolved
  @Input() icon: string;
  @Input() title: string;
  @Input() tooltip: string;
  @HostBinding("style.order")
  @Input() sortOrder: number = 0;
  @Input() status: number = 4;
}
