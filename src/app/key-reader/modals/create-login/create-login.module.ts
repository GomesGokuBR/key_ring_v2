import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLoginPageRoutingModule } from './create-login-routing.module';

import { CreateLoginPage } from './create-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLoginPageRoutingModule
  ],
  declarations: [CreateLoginPage]
})
export class CreateLoginPageModule {}
