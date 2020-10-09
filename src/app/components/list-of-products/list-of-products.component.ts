import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';
import { ProductDto } from '../dto/ProductDto';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent implements OnInit {
  product: Product;
  keyword: string;
  products: Array<any>;

  isDesc = false;
  isAsc = false;
  sortFlag = -1;
  startVal = 0;
  endVal = 0;
  message: string;
  compareProduct: number[] = [];
  showCompareButton = false;
  name: string;
  brand: string;
  sortOrder: string;


  constructor(
    private shoppingService: ShoppingserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.keyword=this.shoppingService.value;
    console.log(this.keyword)
   if(!this.keyword){
    this.shoppingService.displayAllProducts().subscribe((response) => {
    this.products = response;
    })
  }
  else {
    
    this.shoppingService.search(this.keyword).subscribe((data) => {
      console.log(data);
      this.products = data;
      }); 
  }
    this.shoppingService.getSearchBar().subscribe(res=>{
      this.shoppingService.search(res).subscribe((data) => {
        console.log(data);
        this.products = data;
        }); 
    }) 
  }

  // tslint:disable-next-line: typedef
  test() {
    console.log(this.products);
  }

  // tslint:disable-next-line: typedef
  sendProductId(i) {
    // console.log(i);
    console.log(this.products[i].productId);
    this.shoppingService.getId(this.products[i].productId);
  }

   onRadioClick($event) {
     this.sortOrder = $event.target.value;
    
  }
// tslint:disable-next-line: typedef
  onBrandSortClicked() {
    if(this.sortOrder=="desc"){
      this.products.sort(function(a, b){
        if(a.brand.toLowerCase() < b.brand.toLowerCase()) { return 1; }
        if(a.brand.toLowerCase().toLowerCase() > b.brand.toLowerCase()) { return -1; }
        return 0;
    })
    }
    else{
      this.products.sort(function(a, b){
        if(a.brand.toLowerCase() < b.brand.toLowerCase()) { return -1; }
        if(a.brand.toLowerCase().toLowerCase() > b.brand.toLowerCase()) { return 1; }
        return 0;
    })
    }
//     if (this.isDesc === false && this.isAsc === false) {
//       alert('nothing selected!');
//     } else if (this.isAsc === true) {
//       this.sortFlag = 1;
//       this.isDesc = false;
//       this.products.sort(function(a, b){
//     if(a.brand.toLowerCase() < b.brand.toLowerCase()) { return 1; }
//     if(a.brand.toLowerCase().toLowerCase() > b.brand.toLowerCase()) { return -1; }
//     return 0;
// })
//       // this.products = [];
//       // this.shoppingService.sortProduct('brand', false).subscribe(data => {console.log(data); this.products = data;});
//     } else {
//       this.sortFlag = 0;
//       this.isAsc = false;
//       this.products.sort(function(a, b){
//         if(a.brand.toLowerCase() < b.brand.toLowerCase()) { return -1; }
//         if(a.brand.toLowerCase() > b.brand.toLowerCase()) { return 1; }
//         return 0;
//     })
      // this.products = [];
      // this.shoppingService.sortProduct('brand', true).subscribe(data => {console.log(data); this.products = data;});

    // }
  }

  // tslint:disable-next-line: typedef
  onPriceSortClicked() {
    if(this.sortOrder=="desc"){
      this.products.sort((a,b)=> {return b.price-a.price;})
    }
    else{
      this.products.sort((a,b)=> {return a.price-b.price;})
    }
    
  }
  // tslint:disable-next-line: typedef
  addToCart(id) {
    this.shoppingService.addToMyCart(sessionStorage.getItem('customerId'), id).subscribe((data) => {
      console.log(data);
    });
  }

  // tslint:disable-next-line: typedef
  onFilterClick() {

    if (this.brand == '' && this.startVal === 0 && this.endVal === 0) {
      alert('nothing selected!');
    // tslint:disable-next-line: curly
    } else if (
      this.brand !== '' &&
      this.startVal === 0 &&
      this.endVal === 0
    ){
     this.products = [];
    this.shoppingService.filterProduct(this.brand, 0, 0).subscribe(data => {console.log(data); this.products = data;});
    }
    // if (this.products.length === 0) {
    //     this.message = 'No Product Available';
    //   }
    else{
      this.products = [];
      if(this.brand == undefined || this.brand == null)
        this.brand = '';
      this.shoppingService.filterProduct(this.brand, this.startVal, this.endVal).subscribe(data => 
        {if(data)
           this.products = data;});
      if (this.products.length === 0) {
        this.message = 'No Product Available';
      }
    }
    if(!(this.isDesc === false && this.isAsc === false))
      this.onPriceSortClicked();
  }
  // tslint:disable-next-line: typedef
  onCompareClick(selectedProduct: Product) {
    if (this.compareProduct.length + 1 <= 4) {
      this.compareProduct.push(selectedProduct.id);
      sessionStorage.setItem(
        'compare-product',
        JSON.stringify(this.compareProduct)
      );
      if (this.compareProduct.length >= 2) {
        this.showCompareButton = true;
      }
    } else {
      alert('Cannot Compare more than 4 Products');
    }
  }
  // tslint:disable-next-line: typedef
  display() {}
}
export class Product {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  brand: string;
  description: string;
  productImage1: string;
  productImage2: string;
  productImage3: string;
  productImage4: string;

   constructor(
     id: number,
     name: string,
     price: number,
     imgUrl: string,
     brand: string,
     description: string,
     productImage1: string,
     productImage2: string,
     productImage3: string,
     productImage4: string
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
