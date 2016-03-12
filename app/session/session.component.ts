import {Component, OnInit, provide} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {Session} from './session';
import {SessionDetailsComponent} from './session-details.component';

import {InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
import {SessionData} from './session.data';

@Component({
  selector: 'sessions',
  template: `
    <h3>Session List</h3>
    <ul>
      <li *ngFor="#session of sessions"
          [class.selected]="session === selectedSession"
          (click)="onSelect(session)">
          <span>{{session.id}}</span> {{session.title}}
      </li>
    </ul>
    <session-details [session]="selectedSession"></session-details>
  `,
  directives: [SessionDetailsComponent],
  providers: [
    HTTP_PROVIDERS,
    provide(XHRBackend, {
      useClass: InMemoryBackendService
    }),
    provide(SEED_DATA, {
      useClass: SessionData
    })
  ]
})

export class SessionComponent {
  selectedSession: Session;
  sessions: Session[];

  constructor(private _sessionService: SessionService) {}

  onSelect(session: Session) {
    this.selectedSession = session;
  }

  getSessions() {
    this._sessionService.getSessions()
                        .subscribe(
                          sessions => this.sessions = sessions,
                          error => this.errorMessage = 'Session data not retrieved.');
  }

  ngOnInit() {
    this.getSessions();
  }
}
