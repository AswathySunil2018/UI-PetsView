import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './userlogin/userlogin.component';
import { CategoriesComponent } from './categories/categories.component';
import { DogComponent } from './dog/dog.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    UserloginComponent,
    CategoriesComponent,
    DogComponent,
    AccessoriesComponent,
    PaymentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
