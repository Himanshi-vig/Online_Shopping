import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent {
  products: Product[];

  constructor() {}
  display(){
    
  }
}

export class Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  brand: string;
  description: string;
  productImage1 : string;
  productImage2 : string;
  productImage3 : string;
  productImage4 : string;
  
  constructor(
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    brand: string,
    description: string,
    productImage1 : string,
    productImage2 : string,
    productImage3 : string,
    productImage4 : string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
    this.brand = brand;
    this.description = description;
    this.productImage1 = productImage1;
    this.productImage2 = productImage2;
    this.productImage3 = productImage3;
    this.productImage4 = productImage4;
  }
}
