import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  customer : User =new User();
  custName: string ;
  constructor(private http : HttpClient,
    private shoppingservice : ShoppingserviceService) { }

  ngOnInit(): void {
    this.custName = sessionStorage.getItem('customerName');
  }

  myFunction1() {
    alert("Please Login First to Compare");
}
userRegistration(){
  this.shoppingservice.checkUserRegister(this.customer).subscribe(response=>
    alert(JSON.stringify(response)));
}
}

export class User{

  name : string;
  dateOfBirth : Date;
  email :string;
  phoneNo:number;
  password1:string;
  password2:string;
  address:string;  
}