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

  myFunction1() {
    alert("Please Login First to Compare");
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
displayorders(){
if(!sessionStorage.getItem("customerId"))
{
  alert("Please Login to view Orders");
}
else{
  window.location.href="http://localhost:4200/user-myorder";
}
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