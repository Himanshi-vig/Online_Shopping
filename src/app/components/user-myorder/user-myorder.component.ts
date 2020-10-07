import { Component, OnInit } from '@angular/core';
import {PlacedOrder} from '../dto/genericDto';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-myorder',
  templateUrl: './user-myorder.component.html',
  styleUrls: ['./user-myorder.component.css']
})
export class UserMyorderComponent implements OnInit {

  myOrders : PlacedOrder[];

  constructor( private shoppingService  :ShoppingserviceService,
    private router :Router) { }
  ngOnInit(): void {
    this.shoppingService.displayAllOrders(sessionStorage.getItem("customerId")).subscribe((response)=>{
      if(response){
        this.myOrders = response;
      }
    });
  }
    

  }


