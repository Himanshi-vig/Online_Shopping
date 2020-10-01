import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService} from '../../shoppingservice.service';
@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent {
 

  constructor(private shoppingservice : ShoppingserviceService) { }

  retailer : Retailer = new Retailer;
  data: any;

  register() {
    this.shoppingservice.register(this.retailer).subscribe((response) => (this.data = response))
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
