import { Component, Input } from "@angular/core";

const SIGNAGE_ZONES = [1001, 1100, 1149, 1150, 1151, 1200, 1201, 1250, 1251, 1260, 1300, 1350, 1351, 1400, 1450, 1451, 1600, 1800, 1900, 2000];

@Component({
  selector: "lux-signage",
  templateUrl: "./signage.component.html",
  styleUrls: ["./signage.component.css"]
})
export class SignageComponent {
  @Input() animate: boolean = false;

  @Input()
  set id(zoneId: number) {
    if (SIGNAGE_ZONES.includes(zoneId)) {
      this.image = `url('/lu-res/textures/ui/signage/${zoneId}.png')`;
    } else {
      this.image = "none";
    }
  }

  image: string = "none";
}
