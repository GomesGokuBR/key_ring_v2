// models
import { ModelLogin } from './models/model-login';

// interface
import { ILogin } from './interfaces/interfaces';

// bases
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  private _logins: ModelLogin[];

  constructor() {
    this._logins = [
      new ModelLogin({ email: 'e.gomesmatos@tekin.fr', password: '1418', url: 'http', }),
      new ModelLogin({ email: 'e.gomesmatos@tekin.fr', password: '1418', url: 'http', }),
      new ModelLogin({ email: 'e.gomesmatos@tekin.fr', password: '1418', url: 'http', }),
      new ModelLogin({ email: 'e.gomesmatos@tekin.fr', password: '1418', url: 'http', }),
    ];
  }

  public get logins(): ModelLogin[] {
    return this._logins;
  }

  public set logins(logins: ModelLogin[]) {
    this._logins = logins;
  }

  newLogin(login: ILogin): void {
    this._logins.push(new ModelLogin(login));
  }
}
