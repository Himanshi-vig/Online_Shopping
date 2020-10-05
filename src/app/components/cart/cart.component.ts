import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';
import { Cart } from '../DTO/Cart.dto';
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
    private _shoppingService: ShoppingserviceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.uId = sessionStorage.getItem('user');
    if (this.uId == 'null') {
      alert('User Not Logged In');
      this._router.navigate(['home']);
    }
    this._shoppingService.getMyCart(this.uId).subscribe((data: Cart[]) => {
      this.userCart = data;
      if (this.userCart.length == 0) {
        this.totalPrice = 0;
        this.buyProductButton = true;
        return;
      }
      this.totalPrice = this.userCart[this.userCart.length - 1].totalPrice;
    });
  }

  reloadData() {
    this._shoppingService.getMyCart(this.uId).subscribe((data: Cart[]) => {
      this.userCart = data;
      if (this.userCart.length == 0) {
        this.totalPrice = 0;
        this.buyProductButton = true;
        return;
      }
      this.totalPrice = this.userCart[this.userCart.length - 1].totalPrice;
    });
  }

  onAddUpdateClick(cId: number) {
    this._shoppingService
      .updateMyCart(cId.toString(), '1')
      .subscribe((data: string) => {
        //alert(data);
        this.reloadData();
      });
  }
  onMinusUpdateClick(cId: number) {
    this._shoppingService
      .updateMyCart(cId.toString(), '0')
      .subscribe((data: string) => {
        //alert(data);
        this.reloadData();
      });
  }
  onDeleteCartProductClick(cId: number) {
    this._shoppingService
      .deleteMyCart(cId.toString())
      .subscribe((data: string) => {
        this.reloadData();
      });
  }
  getTotalValue(pPrice, qty) {
    return pPrice * qty;
  }
}
