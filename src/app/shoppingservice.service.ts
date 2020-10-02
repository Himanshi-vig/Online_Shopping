import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retailer } from './components/addretailer/addretailer.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {

  constructor(private http: HttpClient) { }

  checkregister(retailer : Retailer): Observable<Retailer> {
    let registerUrl = 'http://localhost:8181/register';
    return this.http.post<Retailer>(registerUrl,retailer);
  }

}
