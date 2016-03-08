import {Component} from 'angular2/core';
import {Session} from './session';

@Component({
  selector: 'session-details',
  template: `
  <article *ngIf="session">
    <h2>{{session.name}} Details</h2>
    <div><label>ID: </label>{{session.id}}</div>
    <div>
      <label for="session-title">Title: </label>
      <input id="session-title" [(ngModel)]="session.name" />
    </div>
    <div>
      <label for="session-start">Start: </label>
      <input id="session-start" [(ngModel)]="session.start" />
    </div>
    <div>
      <label for="session-end">End: </label>
      <input id="session-end" [(ngModel)]="session.end" />
    </div>
  </article>
  `,
  inputs: ['session']
})

export class SessionDetailsComponent {
  session: Session;
}
