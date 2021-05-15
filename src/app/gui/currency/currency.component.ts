import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lux-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.css"]
})
export class CurrencyComponent implements OnInit {
  @Input() count: number;
  image: string;
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
