import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SessionService {
  constructor(private http: Http) {}

  private _sessionsUrl = 'app/sessions';

  getSessions() {
    return this.http.get(this._sessionsUrl)
                    .map(res => res.json().data)
                    // .do(data => console.log(data))
                    .catch(this.handleError);
  }

  getSession(id: number) {
    return this.http.get(this._sessionsUrl)
                    .map(res => {
                      const sessions = res.json().data;
                      const filteredSession = sessions.filter(session => session.id === id);
                      return filteredSession[0];
                    })
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
