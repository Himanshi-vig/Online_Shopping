import { Component, OnInit } from '@angular/core';
import { ShoppingserviceService } from 'src/app/shoppingservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customer : User =new User();

  constructor(private shoppingservice : ShoppingserviceService) { }

  ngOnInit(): void {
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
     password:string;
     //password2:string;
     address:string;  
}
