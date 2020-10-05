import { ShoppingserviceService } from 'src/app/shoppingservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Cart} from '../dto/Cart.dto';

@Component({
  selector: 'app-user-place-order',
  templateUrl: './user-place-order.component.html',
  styleUrls: ['./user-place-order.component.css']
})
export class UserPlaceOrderComponent implements OnInit {

  totalPrice: number = 0;
  userCart: Cart[];
  uId: string;
  payType: string;

  constructor( private router :Router,
    private shoppingService  :ShoppingserviceService) {}

  ngOnInit(): void {
    this.uId = sessionStorage.getItem('user');
    if(this.uId=="null"){
      alert("User Not Logged In")
    }
  }

}

