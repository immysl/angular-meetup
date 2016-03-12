import {Component, OnInit} from 'angular2/core';

import {Session} from '../session/session';
import {SessionService} from '../session/session.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  session: Session[];

  constructor(private _sessionService: SessionService) {}

  ngOnInit() {
    this._sessionService.getSessions()
                        .subscribe(sessions => this.sessions = sessions.slice(1,5));
  }

  gotoDetails() {}
}
