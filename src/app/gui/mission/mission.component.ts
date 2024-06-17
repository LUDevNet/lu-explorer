import { Component, HostBinding, Input } from "@angular/core";
import { DB_Icons } from "../../../defs/cdclient";
import { MissionFragment } from "generated/graphql";

@Component({
  selector: "lux-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.css"]
})
export class MissionComponent {
  @Input() set mission(value: MissionFragment) {
    this.id = value.id;
    this.sortOrder = value.UISortOrder;
    this.isMission = value.isMission == 1;
    if (value.name_loc) {
      this.title = value.name_loc;
    } else {
      this.title = (this.isMission ? 'Mission' : 'Achievement')+' #'+this.id;
    }
    let icon;
    if (this.isMission) {
      if (value.MissionText.length > 0) {
        this.tooltip = value.MissionText[0].in_progress_loc;
      }
      icon = value.MissionTasks[0].largeTaskIconID;
    } else {
      if (value.MissionText.length > 0) {
        this.tooltip = value.MissionText[0].description_loc;
      }
      icon = value.missionIconID;
    }
    this.icon = "/lu-res/textures/ui/" + (icon ? icon.IconPath : "inventory/unknown.png").toLowerCase().replace(/dds$/, "png");
  }
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
