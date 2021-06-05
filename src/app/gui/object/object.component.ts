import { Component, Input } from "@angular/core";

@Component({
  selector: "lux-object",
  templateUrl: "./object.component.html",
  styleUrls: ["./object.component.css"]
})
export class ObjectComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() tooltip: string;
}
