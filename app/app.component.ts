import {Component} from 'angular2/core';
import {SessionService} from './session/session.service';
import {SessionComponent} from './session/session.component';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <sessions></sessions>
  `,
  directives: [SessionComponent],
  providers: [
    SessionService
  ]
})

export class AppComponent {
  title = 'Angular Meetup';
}
