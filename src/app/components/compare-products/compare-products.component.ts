import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService} from '../../shoppingservice.service';
import { Product } from '../retailer-addproduct/retailer-addproduct.component';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {

  compareProduct  = [];
  products = [];
  constructor(
    private shoppingService : ShoppingserviceService
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('compare-product'))
    {
      this.compareProduct = JSON.parse(sessionStorage.getItem('compare-product'));
      for(let i=0; i<this.compareProduct.length; i++)
      {
        this.shoppingService.getProductById(this.compareProduct[i])
      .subscribe((data: Product)=>{console.log(data);this.products.push(data)});
      }
      
    }
  }

}
