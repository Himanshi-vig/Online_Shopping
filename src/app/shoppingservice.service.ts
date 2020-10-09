
import { Wishlist } from './components/dto/Wishlist';
import { User } from './components/authentication/signup/signup.component';

import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  
  displayProducts(productId: number): Observable<any> {
    let Url = 'http://localhost:6969/productdisplay';
    return this.http.get(Url + '?productId=' + productId);
  }

  displayAllProducts(): Observable<any> {
    let Url = 'http://localhost:6969/all-productdisplay';
    return this.http.get(Url);
  }

  checkAddProduct(product: Product, y : string): Observable<any> {
    let params = new HttpParams();
    params = params.append('retailerId',y);
    let productUrl = 'http://localhost:6969/addproduct';
    return this.http.post<any>(productUrl,product,{params});
  }
  displayAllOrders(customerId : string): Observable<PlacedOrder[]> {
    let params = new HttpParams();
    params = params.append('uId',customerId);
    let Url = 'http://localhost:6969/getMyPlacedOrders';
    return this.http.get<PlacedOrder[]>(Url,{params});
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
  // For Wishlist
  getMyWishlist(uId : string) : Observable<Wishlist[]> 
  {
    let params = new HttpParams();
    params = params.append('uId',uId);
    this._url = this._tempurl;
    this._url += 'getMyWishlist';
    return this.http.get<Wishlist[]>(this._url,{params});
  }
  deleteMyWishlist(wId: string)
  {
    let params = new HttpParams();
    params = params.append('wId',wId);
    this._url = this._tempurl;
    this._url += 'deleteMyWishlist';
    return this.http.delete(this._url,{params});
  }
  

 addToMyWishlist(uId: string, pId: string)
  {
    let params = new HttpParams();
    params = params.append('uId',uId);
    params = params.append('pId',pId);
    this._url = this._tempurl;
    this._url += 'addToMyWishlist';
    return this.http.get(this._url,{params});
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