import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateLoginPage } from './create-login.page';

const routes: Routes = [
  {
    path: '',
    component: CreateLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateLoginPageRoutingModule {}
