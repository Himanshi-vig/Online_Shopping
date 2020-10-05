import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './components/addretailer/addretailer.component';
import { Product } from './components/retailer-addproduct/retailer-addproduct.component';
import { Login, LoginStatus } from './components/authentication/login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ShoppingserviceService {
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

  login(login: Login): Observable<LoginStatus> {
    let loginUrl = 'http://localhost:9191/login';
    return this.http.post<LoginStatus>(loginUrl, login);
  }
}
