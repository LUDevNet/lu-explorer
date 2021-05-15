import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lux-slot",
  templateUrl: "./slot.component.html",
  styleUrls: ["./slot.component.css"]
})
export class SlotComponent implements OnInit {
  @Input() count: number = -1;
  @Input() equipped: boolean = false;
  @Input() link: string;
  @Input() icon: string = "/lu-res/textures/ui/inventory/unknown.png";

  constructor() { }

  ngOnInit(): void {
  }

}
