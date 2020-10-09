import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';

@Component({
  selector: 'app-retailer-addproduct',
  templateUrl: './retailer-addproduct.component.html',
  styleUrls: ['./retailer-addproduct.component.css']
})
export class RetailerAddproductComponent {

  retailerId : number;
  // x: any;
  // y:any;
  check : String = sessionStorage.getItem("counter");
  product: Product = new Product();
  constructor(private shoppingservice : ShoppingserviceService) { }

  
 addProduct(){
  var x = sessionStorage.getItem("retailerId");
  //var y  : number = +x;

  this.shoppingservice.checkAddProduct(this.product , x).subscribe(response => alert(JSON.stringify(response)));
 }
}
export class Product {
  name: string;
  price: number;
  quantity: number;
  category: string;
  brand: string;
  description: string;
  productImage1: string;
  productImage2: string;
  productImage3: string;
  productImage4: string;
  //retailerId : string;
}
