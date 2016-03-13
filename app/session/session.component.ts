import {Component, OnInit, provide} from 'angular2/core';
import {Session} from './session';
import {SessionService} from './session.service';
import {SessionDetailsComponent} from './session-details.component';

@Component({
  selector: 'sessions',
  templateUrl: 'app/session/session.component.html',
  directives: [SessionDetailsComponent]
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
