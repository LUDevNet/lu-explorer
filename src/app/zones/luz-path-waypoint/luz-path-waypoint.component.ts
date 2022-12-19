import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Location } from "@angular/common";

import { LuzService } from "../luz-file/luz-file.component";

@Component({
  selector: "app-luz-path-waypoint",
  templateUrl: "./luz-path-waypoint.component.html",
  styleUrls: ["./luz-path-waypoint.component.css"]
})
export class LuzPathWaypointComponent implements OnInit {
  path: any;
  waypoint: any;
  index: number;

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
    this.index = +params.waypoint;
    this.waypoint = this.path.waypoints[params.waypoint];
  }

  onBackClick() {
    this.location.back();
  }

  onUpClick() {
    this.router.navigate([".."], { relativeTo: this.route })
  }

  onPrevClick() {
    if (this.index == 0) {
      return;
    }
    this.router.navigate(["..", this.index-1], { relativeTo: this.route })
  }

  onNextClick() {
    if (this.index >= this.path.waypoints.length-1) {
      return;
    }
    this.router.navigate(["..", this.index+1], { relativeTo: this.route })
  }
}
