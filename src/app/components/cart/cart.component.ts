import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';
import { Cart } from '../dto/genericDto';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userCart: Cart[];
  uId;
  totalPrice: number = 0;
  buyProductButton: boolean = false;
  constructor(
    private shoppingService: ShoppingserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.uId = sessionStorage.getItem('user');
    this.uId = 2;
    if (this.uId == 'null') {
      alert('User Not Logged In');
      this.router.navigate(['home']);
    }
    this.shoppingService.getMyCart(this.uId).subscribe((data: Cart[]) => {
      this.userCart = data;
      console.log(data);
      if (this.userCart.length == 0) {
        this.totalPrice = 0;
        this.buyProductButton = true;
        return;
      }
      this.totalPrice = this.userCart[this.userCart.length - 1].totalPrice;
    });
  }

  reloadData() {
    this.shoppingService.getMyCart(this.uId).subscribe((data: Cart[]) => {
      this.userCart = data;
      if (this.userCart.length == 0) {
        this.totalPrice = 0;
        this.buyProductButton = true;
        return;
      }
      this.totalPrice = this.userCart[this.userCart.length - 1].totalPrice;
    });
  }

  onAddUpdateClick(cartId: number) {
    this.shoppingService.updateMyCart(cartId, 1).subscribe((data: string) => {
      console.log(data);
      // this.reloadData();
    });
  }
  onMinusUpdateClick(cartId: number) {
    this.shoppingService.updateMyCart(cartId, 0).subscribe((data: string) => {
      console.log(data);
      //alert(data);
      this.reloadData();
    });
  }
  onDeleteCartProductClick(cartId: number) {
    this.shoppingService
      .deleteMyCart(cartId.toString())
      .subscribe((data: string) => {
        this.reloadData();
      });
  }

  getTotalValue(pPrice, qty) {
    return pPrice * qty;
  }
}
