import {Component} from 'angular2/core';
import Session from './session/session';
import SessionDetailsComponent from './session/session-details.component';

@Component({
  selector: 'meetup-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Sessions</h2>
    <ul>
      <li *ngFor="#session of sessions"
          [class.selected]="session === selectedSession"
          (click)="onSelect(session)">
          <span>{{session.id}}</span> {{session.title}}
      </li>
    </ul>
    <session-details [session]="selectedSession"></session-details>
  `,
  directives: [SessionDetailsComponent]
})

export class AppComponent {
  title = 'Angular Meetup';
  selectedSession: Session;

  onSelect(session: Session) {
    this.selectedSession = session;
  }
}
