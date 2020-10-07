// import { Cart } from './../dto/Cart.dto';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-place-order',
  templateUrl: './user-place-order.component.html',
  styleUrls: ['./user-place-order.component.css']
})
export class UserPlaceOrderComponent implements OnInit {

  totalPrice: number = 0;
  userCart: Cart[];
  uId;
  payType: string;
  cart:Cart=new Cart();

  constructor( private router :Router,
    private shoppingService  :ShoppingserviceService) {}

  ngOnInit(): void {
    //this.uId = sessionStorage.getItem('user');
    this.uId=201;
    if(this.uId=="null"){
      alert("User Not Logged In");
      this.router.navigate(['homepage']);
    }

  this.shoppingService.getMyCart(this.uId).subscribe((data:Cart[])=>
    {
      this.userCart=data;
      this.totalPrice=this.userCart[this.userCart.length-1].totalPrice;
    })
  }
getTotalValue(pPrice,qty){
  return pPrice*qty;
}

placeOrder(){
  console.log()
  this.shoppingService.placeOrder(this.userCart,this.payType)
  .subscribe(data=>
    {
      alert(data);
      this.router.navigate(['homepage']);
    } )
  
  }

}

export class Cart
{
  cId : number;
	pId : number;
	qty : number;
	pImage1 : string;
	pName : string;
	pBrand : string;
	pPrice : number;
	totalPrice : number;

}