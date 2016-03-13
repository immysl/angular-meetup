import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Session} from '../session/session';
import {SessionService} from '../session/session.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  session: Session[];

  constructor(
    private _router: Router,
    private _sessionService: SessionService) {}

  ngOnInit() {
    this._sessionService.getSessions()
                        .subscribe(sessions => this.sessions = sessions);
  }

  gotoDetails(session: Session) {
    let link = ['SessionDetails', {
      id: session.id
    }];

    this._router.navigate(link);
  }
}
