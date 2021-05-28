import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "lux-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.css"]
})
export class MissionComponent {
  @Input() id: number;
  @Input() isMission: boolean = true;
  @Input() iconID: number;
  @Input() title: string;
  @Input() tooltip: string;
  @HostBinding("style.order")
  @Input() sortOrder: number = 0;
  @Input() status: number = 4;
}
