import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './components/addretailer/addretailer.component';
import { Product } from './components/retailer-addproduct/retailer-addproduct.component';
import { Login, LoginStatus } from './components/authentication/login/login.component';
import { Cart , PlacedOrder} from '../app/components/dto/genericDto';


@Injectable({
  providedIn: 'root',
})
export class ShoppingserviceService {

  private _url: any;
  tempurl: any;
  private _tempurl: any;


  constructor(private http: HttpClient) {}

  checkregister(retailer: Retailer): Observable<Retailer> {
    let registerUrl = 'http://localhost:6969/register';
    return this.http.post<Retailer>(registerUrl, retailer);
  }
  checkAddProduct(product: Product): Observable<Product> {
    let productUrl = 'http://localhost:6969/addproduct';
    return this.http.post<Product>(productUrl, product);
  }
  displayProducts(productId: number): Observable<any> {
    let Url = 'http://localhost:6969/productdisplay';
    return this.http.get(Url + '?productId=' + productId);
  }
  search(keyword: string): Observable<Product[]> {
    let searchUrl = 'http://localhost:6969/search/'+keyword;
    return this.http.get<Product[]>(searchUrl);
  }


  placeOrder(cart:Cart[],type:string): Observable<any>{
    this._url = 'http://localhost:6969/';
    this._url += 'placeOrder' + '/' + type;
    return this.http.post(this._url,cart,{responseType:'text'});
    
  }

  login(login: Login): Observable<LoginStatus> {
    let loginUrl = 'http://localhost:6969/login';
    return this.http.post<LoginStatus>(loginUrl, login);
  }
  updateMyCart(cartId: number, addOrMinus: number) {
    this._url = this.tempurl;
    this._url += 'updateMyCart/' + cartId;
    if (addOrMinus === 1) {
      this._url += '/' + '1';
      return this.http.get(this._url, { responseType: 'text' });
    } else {
      this._url += '/' + '0';
      return this.http.get(this._url, { responseType: 'text' });
    }
  }
  deleteMyCart(cartId: string) {
    let url = 'http://localhost:6969/deleteMyCart';
    return this.http.delete(url + '?cartId=' + cartId);
  }
  addToMyCart(userId: string, productId: string) {
    let link = 'http://localhost:6969/addToMyCart';
    return this.http.get(
      link + '?userId=' + userId + '&productId=' + productId
    );
  }
  getMyCart(uId: string): Observable<Cart[]> {
    this._url = this._tempurl;
    this._url += 'getMyCart/' + uId;
    return this.http.get<Cart[]>(this._url);
  }

  getMyPlacedOrders(uId: string) : Observable<PlacedOrder[]>
  {
    this._url = this._tempurl;
    this._url += 'getMyPlacedOrders/' + uId;
    return this.http.get<PlacedOrder[]>(this._url);
  }
}
