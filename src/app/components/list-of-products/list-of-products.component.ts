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
  products;
  isDesc: boolean = false;
  isAsc: boolean = false;
  sortFlag: number = -1;
  startVal: number = 0;
  endVal: number = 0;
  message: string;
  compareProduct: number[] = [];
  showCompareButton: boolean = false;
  name: string;

  constructor(
    private shoppingService: ShoppingserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.shoppingService.displayAllProducts().subscribe((response) => {
    this.products = response;
    //this.showCompareButton = false;
    //this.keyword = this.shoppingService.value;
    //console.log(this.keyword);
    //this.shoppingService.search(this.keyword).subscribe((data) => {
    //console.log(data);

     //this.products = data;

    });
  }

  test() {
    console.log(this.products);
  }

  sendProductId(i) {
    //console.log(i);
    console.log(this.products[i].productId);
    this.shoppingService.getId(this.products[i].productId);
  }

   onRadioClick($event) {
    if ($event.target.value === 'asc') {
      this.isAsc = true;
    } else {
      this.isDesc = true;
    }
  }
  onBrandSortClicked() {
    if (this.isDesc === false && this.isAsc === false) {
      alert('nothing selected!');
    } else if (this.isAsc === true) {
      this.sortFlag = 1;
      this.isAsc = false;

      this.products = [];
      this.shoppingService.sortProduct('brand',false).subscribe(data=>{console.log(data);this.products=data});
    } else {
      this.sortFlag = 0;
      this.isDesc = false;
      this.products = [];
      this.shoppingService.sortProduct('brand',true).subscribe(data=>{console.log(data);this.products=data});

    }
  }

  onPriceSortClicked() {
    if (this.isDesc === false && this.isAsc === false) {
      alert('nothing selected!');
    } else if (this.isAsc === true) {
      this.sortFlag = 1;
      this.isAsc = false;
      this.shoppingService.sortProduct('price',false).subscribe(data=>{console.log(data);this.products=data});
    } else {
      this.sortFlag = 0;
      this.isDesc = false;
      this.shoppingService.sortProduct('price',true).subscribe(data=>{console.log(data);this.products=data});
    }
  }
  addToCart(id) {
    this.shoppingService.addToMyCart('202', id).subscribe((data) => {
      console.log(data);
    });
  }

  // onFilterClick() {
  //   if (this.product.brand == '' && this.startVal == 0 && this.endVal == 0) {
  //     alert('nothing selected!');
  //   } else if (
  //     this.product.brand != '' &&
  //     this.startVal == 0 &&
  //     this.endVal == 0
  //   ) 
  //    this.products = [];
  //    this.shoppingService.filterProduct(this.product.brand,0,0).subscribe(data=>{console.log(data);this.products=data});
  //    if (this.products.length == 0) {
  //       this.message = 'No Product Available';
  //     }
  //   else{
  //     this.products = [];
  //     this.shoppingService.filterProduct(this.product.brand,this.startVal,this.endVal).subscribe(data=>{console.log(data);this.products=data});
  //     if (this.products.length == 0) {
  //       this.message = 'No Product Available';
  //     }
  //   }
  // }
  // onCompareClick(selectedProduct: Product) {
  //   if (this.compareProduct.length + 1 <= 4) {
  //     this.compareProduct.push(selectedProduct.id);
  //     sessionStorage.setItem(
  //       'compare-product',
  //       JSON.stringify(this.compareProduct)
  //     );
  //     if (this.compareProduct.length >= 2) {
  //       this.showCompareButton = true;
  //     }
  //   } else {
  //     alert('Cannot Compare more than 4 Products');
  //   }
  // }
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