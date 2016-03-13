import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Session} from './session';
import {SessionService} from './session.service';

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
    <button (click)="goBack()">Back</button>
  </article>
  `,
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
