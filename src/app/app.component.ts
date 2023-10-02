import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, first, map, mergeMap } from 'rxjs/operators';

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/typeface-nunito/index.css', './app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'LU-Explorer';
  subscriptions = new Subscription();

  title$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(() => this.getChild(this.activatedRoute).snapshot),
    map(route => {
      const data = route.data;
      return data.title ? (isFunction(data.title) ? data.title(route.params) : data.title) : "LU-Explorer";
    }),
  );

  constructor(private router: Router,
    public viewContainerRef: ViewContainerRef, // used by tooltips, do not remove
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
  }

  ngOnInit() {
    this.subscriptions.add(this.title$.subscribe((value) => {
      this.titleService.setTitle(value + " | LU-Explorer")
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
