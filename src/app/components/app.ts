import { Component, View } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";

import { HomeComponent } from "./home/home";
import { ElementsComponent } from "./elements/elements";

@Component({
	selector: "app"
})
@View({
	directives: [ ROUTER_DIRECTIVES],
	template: "<router-outlet></router-outlet>"
})
@RouteConfig([
	{ component: HomeComponent, path: "/" },
	{ component: ElementsComponent, path: "/elements" }
])

export class AppComponent { }