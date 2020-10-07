import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDetails } from 'src/app/models/logindetails';

@Component({
  selector: 'app-retailersignin',
  templateUrl: './retailersignin.component.html',
  styleUrls: ['./retailersignin.component.css']
})
export class RetailersigninComponent implements OnInit {

  login : Login = new Login();
  adminstatus: RetailerStatus = new RetailerStatus();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {}
  
  checkRetailerLogin(){
    console.log("Hello");
    let data = new LoginDetails();
    data.email = this.login.email;
    data.password = this.login.password;
    this.http.post<any>('http://localhost:6969/retailerlogin', data).subscribe(res=>{if(res.status == true){
  this.adminstatus.retailerId = res.adminId;
  this.adminstatus.retailerName = res.adminName;
  sessionStorage.setItem("adminName",this.adminstatus.retailerName);
  sessionStorage.setItem("customerId", this.adminstatus.retailerId);
  window.location.href = "http://localhost:4200/retailer-login";

  }
});
}
}
export class Login{
  email :string;
  password : string;
  retailertatus : RetailerStatus;
}

export class RetailerStatus{
  status: boolean;
  statusMessage: string;
  retailerName: string;
  retailerId: string;
}
