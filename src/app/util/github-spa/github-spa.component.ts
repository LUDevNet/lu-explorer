import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-github-spa',
  templateUrl: './github-spa.component.html',
  styleUrls: ['./github-spa.component.css']
})
export class GithubSpaComponent implements OnInit {

  constructor(
  	private router: Router,
  	private route: ActivatedRoute) { }

  ngOnInit() {
  	let path = this.route.snapshot.queryParams["p"];
  	if (path) {
  		this.router.navigateByUrl(path, {replaceUrl: true});
  	} else {
  		this.router.navigateByUrl("/dashboard", {replaceUrl: true});
  	}
  }

}
