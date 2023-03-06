

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {
  path:"",
  redirectTo:'home',
  pathMatch:'full'
 },
//  {
//   path:"home",
//   redirectTo:"loading",
//   pathMatch:'full'
//  },
//  {
//   path:"loading",
//   redirectTo:"forgot",
//   pathMatch:'full'
//  },

//  {
//   path:"loading",
//   component:LoadingComponent
//  },
  {
  path:"home",
  component:LoginComponent
 },
  {
    path:'forgot',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
