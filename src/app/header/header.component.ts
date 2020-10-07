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
  test() {
    console.log(this.keyword);
    
    this.shoppingService.sendInformation(this.keyword);
  }
  logout() : void{
    sessionStorage.clear();
    window.location.href = "http://localhost:4200/homepage";

  }
 
  /*onProductSearch(){
   //console.log(this.keyword);
   this.router.navigate(['/list-of-products', this.keyword]);
 } */
/* loginUser()
  {
    this._router.navigate(['/user-login']);
  }

  logoutUser()
  {
    alert('User Logged Out');
    sessionStorage.setItem('user',null);
    this.cQty = null;
    this.uId = null;
    this.ngOnInit();
    this._router.navigate(['home']);
  }

  showMyCart()
  {
    if(parseInt(sessionStorage.getItem('user'))>0)
    {
      this._router.navigate(['user-cart']);
    }
    else
    {
      alert("Not Logged In");
    }
  } */
}
