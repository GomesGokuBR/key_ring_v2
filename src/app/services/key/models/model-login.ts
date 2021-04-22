import { ILogin } from './../interfaces/interfaces';
import { v4 as uuidv4 } from 'uuid';

export class ModelLogin {

  private _password: string;
  private _email: string;
  private _url: string;
  private _id: string;

  constructor(params: ILogin) {
    this._password = params.password;
    this._email = params.email;
    this._url = params.url;
    this._id = uuidv4();
  }

  public get id() : string {
    return this._id;
  }

  public get password() : string {
    return this.password;
  }

  public get email() : string {
    return this.email;
  }

  public get login() : ILogin {
    return {
      password: this._password,
      email: this._email,
      url: this._url,
      id: this._id
    }
  }


}
