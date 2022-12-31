import { Directive, Input } from "@angular/core";
import { MissionComponent } from "./mission.component";
import { LuJsonService, LuLocaleService } from "../../services";
import { DB_Missions } from "../../../defs/cdclient";

@Directive({
  selector: "lux-mission[luxFetch]"
})
export class MissionDirective {

  @Input("luxFetch") set id(id: number) {
    this.missionComponent.id = id;
    this.missionComponent.title = `#${id}`;
    this.luJson.getMission(id).subscribe(this.onMission);
    this.luLocale.getLocaleEntry("Missions", id).subscribe(x => { if (x) { this.missionComponent.title = x.name; }});
    this.luLocale.getLocaleEntry("MissionText", id).subscribe(this.onMissionText.bind(this, id));
  }

  constructor(private luJson: LuJsonService, private luLocale: LuLocaleService, private missionComponent: MissionComponent) {
  }

  onMission = (mission: DB_Missions) => {
    this.missionComponent.isMission = mission.isMission;
    this.missionComponent.sortOrder = -mission.isMission * 10000 + mission.UISortOrder;
    if (mission.isMission) {
      this.luJson.getMissionTasks(this.missionComponent.id).subscribe(x => {
        this.missionComponent.iconID = x[0].largeTaskIconID
      });
    } else {
      this.missionComponent.iconID = mission.missionIconID;
    }
  }

  onMissionText = (id: number, missionText: any) => {
    if (missionText) {
      if (missionText.in_progress) {
        this.missionComponent.tooltip = missionText.in_progress;
      } else if (missionText.description) {
        this.missionComponent.tooltip = missionText.description;
      } else {
        this.missionComponent.tooltip = `Mission #${id}`;
      }
    } else {
      this.missionComponent.tooltip = `Mission #${id}`;
    }
  }
}
