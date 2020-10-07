import { User } from './components/authentication/signup/signup.component';

import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './components/addretailer/addretailer.component';
import { Product } from './components/retailer-addproduct/retailer-addproduct.component';
import {
  Login,
  LoginStatus,
} from './components/authentication/login/login.component';
import { Cart, PlacedOrder } from '../app/components/dto/genericDto';
import { ParsedPropertyType } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ShoppingserviceService {
  private _url: any;
  private _tempurl = 'http://localhost:6969/';

  constructor(private http: HttpClient) {}

  checkregister(retailer: Retailer): Observable<Retailer> {
    let registerUrl = 'http://localhost:6969/register';
    return this.http.post<Retailer>(registerUrl, retailer);
  }

  checkUserRegister(customer: User): Observable<User> {
    let registerUrl = 'http://localhost:6969/userRegistration';
    return this.http.post<User>(registerUrl, customer);
  }
  checkAddProduct(product: Product): Observable<Product> {
    let productUrl = 'http://localhost:6969/addproduct';
    return this.http.post<Product>(productUrl, product);
  }
  displayProducts(productId: number): Observable<any> {
    let Url = 'http://localhost:6969/productdisplay';
    return this.http.get(Url + '?productId=' + productId);
  }

  displayAllProducts(): Observable<any> {
    let Url = 'http://localhost:6969/all-productdisplay';
    return this.http.get(Url);
  }

  search(keyword: string): Observable<Product[]> {
    let searchUrl = 'http://localhost:6969/search?search=' + keyword;
    return this.http.get<Product[]>(searchUrl);
  }
  sortProduct(by: string, order: boolean): Observable<Product[]> {
    let sortUrl =
      'http://localhost:6969/sortProduct/?by=' + by + '&order=' + order;
    return this.http.get<Product[]>(sortUrl);
  }
  filterProduct(brand : string, start : number, end :number):Observable<Product[]>{
    let filterUrl='http://localhost:6969/filterProduct/?brand=' + brand+'&end=' + end+ '&start=' + start;
    return this.http.get<Product[]>(filterUrl);
  }

  public value;
  sendInformation(data) {
    this.value = data;
    console.log(this.value);
  } 
  
  public productId;
  getId(data){
    this.productId = data;
    console.log(this.productId);
  }

  placeOrder(cart: Cart[],type:string): Observable<any> {
    var placeOrderUrl = "http://localhost:6969/placeOrder?payType="+ type;
    return this.http.post(placeOrderUrl,cart,{responseType:'text'});
  }

  login(login: Login): Observable<LoginStatus> {
    console.log('Hello');
    let loginUrl = 'http://localhost:6969/login';
    return this.http.post<LoginStatus>(loginUrl, login);
  }
  updateMyCart(cartId: number, addOrMinus: number) {
    this._url = this._tempurl;
    this._url += 'updateMyCart?cartId=' + cartId;
    if (addOrMinus === 1) {
      this._url += '&addOrMinus=' + '1';
      return this.http.get(this._url, { responseType: 'text' });
    } else {
      this._url += '&addOrMinus=' + '0';
      return this.http.get(this._url, { responseType: 'text' });
    }
  }
  deleteMyCart(cartId: string) {
    let url = 'http://localhost:6969/deleteMyCart';
    return this.http.get(url + '?cartId=' + cartId,{ responseType: 'text' });
  }
  addToMyCart(userId: string, productId: string) {
    let link = 'http://localhost:6969/addToMyCart';
    return this.http.get(
      link + '?userId=' + userId + '&productId=' + productId
    );
  }
  getMyCart(uId: string): Observable<Cart[]> {

    let getCartUrl = "http://localhost:6969/getMyCart?userId=" + uId;
    return this.http.get<Cart[]>(getCartUrl);
  }

  getMyPlacedOrders(uId: string): Observable<PlacedOrder[]> {
    this._url = this._tempurl;
    this._url += 'getMyPlacedOrders/' + uId;
    return this.http.get<PlacedOrder[]>(this._url);
  }
}