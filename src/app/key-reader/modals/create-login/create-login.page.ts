import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.page.html',
  styleUrls: ['./create-login.page.scss'],
})
export class CreateLoginPage {

  public password: string;
  public email: string;
  public url: string;

  constructor(public modalController: ModalController) {
    this.password = '';
    this.email = '';
    this.url = '';
  }

  save(): void {
    if(this.email.length > 0 && this.password.length > 0) {
      this.dismiss();
    } else {
      alert('Error login');
    }
  }

  private dismiss(): void {
    this.modalController.dismiss({
      password: this.password,
      email: this.email,
      url: this.url
    })
  }

}
