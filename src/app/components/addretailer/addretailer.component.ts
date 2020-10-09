import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService} from '../../shoppingservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent {
 

  passwordsMatch: boolean = false;
  constructor(private shoppingservice : ShoppingserviceService) { }

  repassword: string;
  retailer : Retailer = new Retailer();
   
  register() {
    this.shoppingservice.checkregister(this.retailer).subscribe(response => alert(JSON.stringify(response)));
  }
  validatePassword(){
    if(this.retailer.password === this.repassword)
      this.passwordsMatch = true;
    else this.passwordsMatch = false;
  }
}

export class Retailer{
  name:string;
  email:string;
  password:string;
  phoneNo:string;
  address:string;
  admin : Admin;
}

export class Admin{
  name:string;
  email:string;
  password:string;
  
}



