import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'sign',component:SigninComponent},
  {path:'userhome',component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
