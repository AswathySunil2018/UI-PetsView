import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CategoriesComponent } from './categories/categories.component';
import { DogComponent } from './dog/dog.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'sign',component:SigninComponent},
  {path:'userhome/:user',component:UserloginComponent},
  {path:'category',component:CategoriesComponent},
  {path:'dog',component:DogComponent},
  {path:'accessory',component:AccessoriesComponent},
  {path:'payment',component:PaymentComponent},
  {path:'cart',component:CartComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
