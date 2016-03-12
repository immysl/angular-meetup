import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {SessionService} from './session/session.service';
import {SessionComponent} from './session/session.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'meetup-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <ul>
        <li>
          <a [routerLink]="['Dashboard']">Dashboard</a>
        </li>
        <li>
          <a [routerLink]="['Sessions']">Sessions</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SessionService
  ]
})

@RouteConfig([
  {
    path: '/sessions',
    name: 'Sessions',
    component: SessionComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = 'Angular Meetup';
}
