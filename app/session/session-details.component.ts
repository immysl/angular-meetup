import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Session} from './session';
import {SessionService} from './session.service';

@Component({
  selector: 'session-details',
  template: 'app/session/session-details.component.html',
  inputs: ['session']
})

export class SessionDetailsComponent {
  session: Session;

  constructor(
    private _sessionService: SessionService,
    private _routeParams: RouteParams
  ) {

  }

  ngOnInit() {
    let id = parseInt(this._routeParams.get('id'), 10);

    this._sessionService.getSession(id)
                        .subscribe(session => this.session = session);
  }

  goBack() {
    window.history.back();
  }
}
