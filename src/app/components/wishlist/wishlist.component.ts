import { Wishlist } from './../dto/Wishlist';
import { Router } from '@angular/router';
import { ShoppingserviceService } from './../../shoppingservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  userWishlist: Wishlist[];
  
  uId: string;

  constructor(
    private shoppingService : ShoppingserviceService, private router : Router) { }

  ngOnInit(): void {
    this.uId = sessionStorage.getItem("customerId");
    if(this.uId=="null")
    {
      alert("User Not Logged In");
    }
    this.shoppingService.getMyWishlist(this.uId).subscribe((data:Wishlist[])=>
    {
      this.userWishlist = data;
    });
  }
  reloadData()
  {
    this.uId = sessionStorage.getItem("customerId");
    if(this.uId=="null")
    {
      alert("User Not Logged In");
      this.router.navigate(['homepage']);
    }
    this.shoppingService.getMyWishlist(this.uId).subscribe((data:Wishlist[])=>
    {
      this.userWishlist = data;
     
    });
  }

  onDeleteWishlistProductClick(wId:number)
  { 
    this.shoppingService.deleteMyWishlist(wId.toString()).subscribe((data:string)=>
    {
      this.reloadData();
    })
  }


  addToMyCart(pID: string, wID: string)
  {
    let uId = sessionStorage.getItem("customerId");
      this.shoppingService.addToMyCart(uId,pID).subscribe(data=>
        {
          this.onDeleteWishlistProductClick(parseInt(wID));
          this.router.navigate(['cart']);
        });
     
  }

}
