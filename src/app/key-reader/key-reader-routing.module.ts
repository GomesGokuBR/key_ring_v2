import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
{
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
},
  {
    path: 'create-login',
    loadChildren: () => import('./modals/create-login/create-login.module').then( m => m.CreateLoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyReaderRoutingModule { }
