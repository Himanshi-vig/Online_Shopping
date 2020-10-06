import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './components/addretailer/addretailer.component';
import { Product } from './components/retailer-addproduct/retailer-addproduct.component';
import {Cart} from './components/dto/Cart.dto';

@Injectable({
  providedIn: 'root',
})
export class ShoppingserviceService {
    private _tempurl =  'http://localhost:6969';
    private _url =      'http://localhost:6969/';

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
    let searchUrl = 'http://localhost:6969/search';
    return this.http.get<Product[]>(searchUrl);
  }

  getMyCart(uId : string) : Observable<Cart[]>{
    this._url = this._tempurl;
    this._url += 'getMyCart/' + uId;
    return this.http.get<Cart[]>(this._url);

  }

  placeOrder(cart:Cart[],type:string): Observable<any>{
    this._url = this._tempurl;
    this._url += 'placeOrder' + '/' + type;
    return this.http.post(this._url,cart,{responseType:'text'});
    
  }


}
