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
  // password: string;
  // password2: string;
  passwordsMatch: boolean = false;
  constructor(private http : HttpClient,
    private shoppingservice : ShoppingserviceService) { }

  ngOnInit(): void {
    this.custName = sessionStorage.getItem('customerName');
  }
checkNo(){
  if(this.customer.phoneNo == null){
    alert('Please enter 10 digit PhoneNo');
  }
}
  
userRegistration(){
  this.shoppingservice.checkUserRegister(this.customer).subscribe(response=>
    alert(JSON.stringify(response)));
}
validatePassword(){
  if(this.customer.password === this.customer.password2)
    this.passwordsMatch = true;
  else this.passwordsMatch = false;
}

}
export class User{

  name : string;
  dateOfBirth : Date;
  email :string;
  phoneNo:number;
  password:string;
  password2:string;
  address:string;  
}