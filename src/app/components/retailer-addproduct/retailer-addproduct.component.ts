import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';

@Component({
  selector: 'app-retailer-addproduct',
  templateUrl: './retailer-addproduct.component.html',
  styleUrls: ['./retailer-addproduct.component.css']
})
export class RetailerAddproductComponent  {

  product: Product = new Product();
  constructor(private shoppingservice : ShoppingserviceService) { }

 addProduct(){
  this.shoppingservice.checkAddProduct(this.product).subscribe(response => alert(JSON.stringify(response)));
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
}
