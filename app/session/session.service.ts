import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SessionService {
  constructor(private http: Http) {}

  private _sessionsUrl = 'app/sessions';
  private _sessionUrl = 'app/session/';

  getSessions() {
    return this.http.get(this._sessionsUrl)
                    .map(res => res.json().data)
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  getSession(id: number) {
    return this.http.get(this._sessionUrl)
                    .map(res => res.json().data)
                    .filter(session => session.id === id)
                    .do(session => console.log(session))
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
