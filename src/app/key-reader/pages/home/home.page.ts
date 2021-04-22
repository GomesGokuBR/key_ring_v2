// interfaces
import { ILogin } from 'src/app/services/key/interfaces/interfaces';

// providers
import { KeyService } from 'src/app/services/key/key.service';

// base
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { CreateLoginPage } from '../../modals/create-login/create-login.page';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ModelLogin } from 'src/app/services/key/models/model-login';
import { IStorageLogin } from 'src/app/services/storage/interface/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private keyService: KeyService, private storageService: StorageService, public modalController: ModalController) {
  }

  ionViewWillEnter() {
    this.getStoredLogins();
  }

  private getStoredLogins(): void {
    const storedLogins = this.storageService.storedLogins;

    this.keyService.logins = storedLogins.map((x) => {
      const modelLogin = new ModelLogin({ id: x.id, email: x.email, password: x.password, url: x.url });

      return modelLogin;
    });
  }

  getLogins(): ILogin[] {
    return this.keyService.logins.map(Mlogin => Mlogin.login);
  }

  async addLogin() {
    const newLogin = await this.presentModalNewLogin();
    if(newLogin) {
      this.keyService.newLogin(newLogin);

      this.storageService.addNewLogin({
        password: newLogin.password,
        email: newLogin.email,
        url: newLogin.url,
        id: newLogin.id,
      });
    }
  }

  private presentModalNewLogin(): Promise<ILogin> {
    return new Promise(async (resolve) => {
      const modal = await this.modalController.create({
        component: CreateLoginPage,
      });

      await modal.present();
      const { data } = await modal.onWillDismiss<ILogin>();
      resolve(data);
    });
  }

  delLogin(id: string): void {
    const foundLoginIndex = this.keyService.logins.findIndex(x => x.id === id);
    this.keyService.logins.splice(foundLoginIndex, 1);
    this.storageService.delLogin(id);
  }

}
