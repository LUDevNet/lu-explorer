import { Component, Input, OnInit } from "@angular/core";
import { CurrencyComponent } from "../currency/currency.component";

@Component({
  selector: "lux-uscore",
  templateUrl: "../currency/currency.component.html",
  styleUrls: ["../currency/currency.component.css"]
})
export class UscoreComponent extends CurrencyComponent implements OnInit {
  @Input() count: number;
  image: string = "/lu-res/ui/ingame/passport_i46.png";
  title: string = "Universe Score";
}
