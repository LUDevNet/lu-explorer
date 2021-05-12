import { Component, Input, OnInit } from "@angular/core";
import { CurrencyComponent } from "../currency/currency.component";

@Component({
  selector: "lux-reputation",
  templateUrl: "../currency/currency.component.html",
  styleUrls: ["../currency/currency.component.css"]
})
export class ReputationComponent extends CurrencyComponent implements OnInit {
  @Input() count: number;
  image: string = "/lu-res/ui/ingame/achievements_id.png";
  title: string = "Reputation";
}
