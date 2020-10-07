import { LoginDetails } from './../../../models/logindetails';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingserviceService } from '../../../shoppingservice.service';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login: Login = new Login();
  loginstatus: LoginStatus = new LoginStatus();
  // message: string;
  // email: string;
  // password: string;
  

  constructor(private http :HttpClient) { }
  ngOnInit() : void {}
  
    // email: string;
    // password: string;
  
  
  // class LoginStatus {
  //   status: boolean;
  //   statusMessage: string;
  //   customerName: string;
  //   customerId: number;
  // }
  

  checkLogin() {
    console.log("Hello");
    let data = new LoginDetails();
    data.email = this.login.email;
    data.password = this.login.password;
    this.http.post<any>('http://localhost:6969/login', data).subscribe(res=>{
 if(res.status == true){
  this.loginstatus.customerId = res.customerId;
  this.loginstatus.customerName = res.customerName;
  sessionStorage.setItem("customerName",this.loginstatus.customerName);
  sessionStorage.setItem("customerId", this.loginstatus.customerId);
  window.location.href = "http://localhost:4200/homepage";

 }

 });
}
}

export class Login{
  email: string;
  password: string;
}

export class LoginStatus{
  status: boolean;
  statusMessage: string;
  customerName: string;
  customerId: string;
}
    //console.log(this.login)



  //   this.shoppingService.login(this.login).subscribe(data => { console.log(data);
  //     if(data.status == true) {
  //       sessionStorage.setItem('customerId', String(data.customerId));
  //       sessionStorage.setItem('customerName',data.customerName);
  //       this.router.navigate(['/dashboard']);
  //     }
  //     else{
  //       this.message = data.statusMessage;
  //     }
  //   })
  // }


