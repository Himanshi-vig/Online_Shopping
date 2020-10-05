import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingserviceService } from '../shoppingservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword: string;
  constructor(private shoppingService: ShoppingserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  
 onProductSearch(){
   this.router.navigate(['/list-of-products', this.keyword]);
 }
}
