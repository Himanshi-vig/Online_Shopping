import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent {

  products : Product[];
  
  constructor() { }
  show(){
    this.products=[
      new Product(1,'iphone 11' ,69000,'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70'),
      new Product(2,'iphone 11 max' ,80000,'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/y/k/z/iphone-11-64-a-mwlx2hn-a-apple-0-original-imafkg24ymsjav9h.jpeg?q=70'),
      new Product(2,'iphone 11 max pro' ,90000,'https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjfehbbqgb.jpeg?q=70')
    ]
  }
  

}

export class Product {
  id :number;
  name : string;
  price: number;
  imgUrl : string;
  constructor(id : number ,name :string ,price : number , imgUrl:string){
      this.id=id;
      this.name=name;
      this.price=price;
      this.imgUrl=imgUrl;
  }
}
