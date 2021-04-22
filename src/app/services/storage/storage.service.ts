// interfaces
import { IStorageLogin, ISaveNewLogin, IUpdateLogin } from './interface/interfaces';

// providers
import { Storage } from '@capacitor/storage';

// base
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storedLogins: IStorageLogin[];

  constructor() {
    this._storedLogins = [];
    this.getStoredLogin();
  }

  private async getStoredLogin() {
    const { value } = await Storage.get({ key: 'logins' });

    if(!value) {
      await Storage.set({ key: 'logins', value: JSON.stringify({ logins: [] }) });
      return;
    }

    const logins = JSON.parse(value) as { logins: IStorageLogin[] };
    this._storedLogins = logins.logins;
  }

  public get storedLogins(): IStorageLogin[] {
    return this._storedLogins;
  }

  public set storedLogins(param: IStorageLogin[]) {
    this._storedLogins = param;
    this.persistLogins();
  }

  public async addNewLogin(login: ISaveNewLogin) {
    this._storedLogins.push({
      createdAt: new Date().toUTCString(),
      updateAt: new Date().toUTCString(),
      password: login.password,
      email: login.email,
      url: login.url,
      id: login.id,
    })

    await this.persistLogins();
  }

  public delLogin(id: string) {
    const foundIndex = this._storedLogins.findIndex(x => x.id === id);

    if(foundIndex) {
      this._storedLogins.splice(foundIndex, 1);
      this.persistLogins();
    }
  }

  public updateLogin(login: IUpdateLogin) {
    const foundIndex = this._storedLogins.findIndex(x => x.id === login.id);
    const found = this._storedLogins.find(x => x.id === login.id);

    if(found) {
      found.updateAt = new Date().toUTCString();
      found.password = login.password;
      found.email = login.email;
      found.url = login.url;
    }

    this._storedLogins.splice(foundIndex, 1, found);
  }

  private async persistLogins() {
    await Storage.set({ key: 'logins', value: JSON.stringify({ logins: this._storedLogins }) })
  }
}
