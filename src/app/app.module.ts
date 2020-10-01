import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserComponent } from './components/user/user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { RetailerAddproductComponent } from './components/retailer-addproduct/retailer-addproduct.component';
import { AddretailerComponent } from './components/addretailer/addretailer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HomepageComponent,
    UserComponent,
    ForgotPasswordComponent,
    CartComponent,
    CheckoutComponent,
    RetailerComponent,
    RetailerAddproductComponent,
    AddretailerComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
