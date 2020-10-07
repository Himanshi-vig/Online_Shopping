import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from '../components/dto/ProductDto';
import { ShoppingserviceService } from '../shoppingservice.service';

@Component({
  selector: 'app-single-product-detail',
  templateUrl: './single-product-detail.component.html',
  styleUrls: ['./single-product-detail.component.css']
})
export class SingleProductDetailComponent implements OnInit {

  constructor(private shoppingService: ShoppingserviceService,
      private http: HttpClient,
      private router: Router) { }

    productId;
    productInfo: ProductDto;
  ngOnInit(): void {
    this.productId = this.shoppingService.productId;
    console.log(this.productId);

    this.http.get<any>('http://localhost:6969/getProductById?pId='+this.productId).subscribe(data=>
    {
      //console.log(data)
      this.productInfo = data;
      console.log(this.productInfo);
    })
  }

}
