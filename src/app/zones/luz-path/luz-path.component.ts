import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";

import { LuzService } from "../luz-file/luz-file.component";

@Component({
  selector: "app-luz-path",
  templateUrl: "./luz-path.component.html",
  styleUrls: ["./luz-path.component.css"]
})
export class LuzPathComponent implements OnInit {
  path: any;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private luzService: LuzService) {}

  ngOnInit() {
    this.route.params.subscribe(this.onRouteChange.bind(this))
  }

  onRouteChange(params: Params) {
    for (const path of this.luzService.luz.paths) {
      if (path.name == params.path) {
        this.path = path;
        break;
      }
    }
  }

  onBackClick() {
    this.location.back();
  }

  onUpClick() {
    this.router.navigate([".."], { relativeTo: this.route })
  }
}
