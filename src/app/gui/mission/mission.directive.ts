import { Directive, Input } from "@angular/core";
import { MissionComponent } from "./mission.component";
import { LuCoreDataService } from "../../services";
import { DB_Missions } from "../../../defs/cdclient";
import { Locale_MissionText } from "../../../defs/locale";

@Directive({
  selector: "lux-mission[luxFetch]"
})
export class MissionDirective {

  @Input("luxFetch") set id(id: number) {
    this.missionComponent.id = id;
    this.missionComponent.title = `#${id}`;
    this.coreData.getSingleTableEntry("Missions", id).subscribe(this.onMission);
    this.coreData.getLocaleEntry("Missions", id, "name").subscribe(x => { if (x) { this.missionComponent.title = x.value; } });
    this.coreData.getLocaleSubtree<Locale_MissionText>("MissionText", id).subscribe(this.onMissionText.bind(this, id));
  }

  constructor(private coreData: LuCoreDataService, private missionComponent: MissionComponent) {
  }

  onMission = (mission: DB_Missions) => {
    this.missionComponent.isMission = mission.isMission;
    this.missionComponent.sortOrder = -mission.isMission * 10000 + mission.UISortOrder;
    if (mission.isMission) {
      this.coreData.getTableEntry("MissionTasks", this.missionComponent.id).subscribe(x => {
        this.missionComponent.iconID = x[0].largeTaskIconID
      });
    } else {
      this.missionComponent.iconID = mission.missionIconID;
    }
  }

  onMissionText = (id: number, missionText: Locale_MissionText) => {
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
