import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserComponent } from './components/user/user.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { RetailerAddproductComponent } from './components/retailer-addproduct/retailer-addproduct.component';
import { AddretailerComponent } from './components/addretailer/addretailer.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { UserPlaceOrderComponent } from './components/user-place-order/user-place-order.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMyorderComponent } from './components/user-myorder/user-myorder.component';
import { FooterComponent } from './components/footer/footer.component';
import { SingleProductDetailComponent } from './single-product-detail/single-product-detail.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RetailerLoginComponent } from './components/retailer-login/retailer-login.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { AdminsigninComponent } from './components/adminsignin/adminsignin.component';
import { RetailersigninComponent } from './components/retailersignin/retailersignin.component';
import { BlankpageComponent } from './components/blankpage/blankpage.component';
import { OrderdisplayComponent } from './components/orderdisplay/orderdisplay.component';
import { CompareProductsComponent } from './components/compare-products/compare-products.component';


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
    ListOfProductsComponent,
    ProductdetailComponent,
    UserPlaceOrderComponent,
    HeaderComponent,
    DashboardComponent,
    UserMyorderComponent,
    FooterComponent,
    SingleProductDetailComponent,
    AdminLoginComponent,
    RetailerLoginComponent,
    UserHomepageComponent,
    AdminsigninComponent,
    RetailersigninComponent,
    BlankpageComponent,
    OrderdisplayComponent,
    CompareProductsComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
