import { Component, Input } from "@angular/core";

@Component({
  selector: "lux-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"]
})
export class ItemListComponent {
  @Input()
  set ids(value: number[]) {
    this._where = "c.id in (" + value + ")";
  }

  @Input()
  set where(value: string) {
    this._where = value;
  }

  _where: string = "";
}
