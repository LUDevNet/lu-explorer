import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";

import { LuzService } from "../luz-file/luz-file.component";

@Component({
  selector: "app-luz-paths",
  templateUrl: "./luz-paths.component.html",
  styleUrls: ["./luz-paths.component.css"]
})
export class LuzPathsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, public luzService: LuzService) {}

  ngOnInit() {
    this.route.params.subscribe(this.onRouteChange.bind(this))
  }

  onRouteChange(params: Params) {

  }

  onBackClick() {
    this.location.back();
  }

  onUpClick() {
    this.router.navigate([".."], { relativeTo: this.route })
  }
}
