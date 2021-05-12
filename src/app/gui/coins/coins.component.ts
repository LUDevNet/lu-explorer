import { Component, Input, OnInit } from "@angular/core";
import { CurrencyComponent } from "../currency/currency.component";

@Component({
  selector: "lux-coins",
  templateUrl: "../currency/currency.component.html",
  styleUrls: ["../currency/currency.component.css"]
})
export class CoinsComponent extends CurrencyComponent implements OnInit {
  @Input() count: number;
  image: string = "/lu-res/ui/ingame/achievements_i4.png";
  title: string = "Coins";
}
