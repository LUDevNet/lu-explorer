import { Component, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/typeface-nunito/index.css', './app.component.css']
})
export class AppComponent {
  title = 'LEGO® Universe Explorer';

  constructor(private router: Router,
    private viewContainerRef: ViewContainerRef,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        let value = data.title ? (isFunction(data.title) ? data.title(rt.snapshot.params) : data.title) : "LU-Explorer";
        this.titleService.setTitle(value + " | LU-Explorer")
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
