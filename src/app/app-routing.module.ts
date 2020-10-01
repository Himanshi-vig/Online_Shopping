import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddretailerComponent } from './components/addretailer/addretailer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RetailerAddproductComponent } from './components/retailer-addproduct/retailer-addproduct.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'user', component: UserComponent },
  { path: 'retailer', component: RetailerComponent },
  { path: 'retailer-addproduct', component: RetailerAddproductComponent },
  { path: 'addretailer', component: AddretailerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
