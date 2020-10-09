import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginDetails } from 'src/app/models/logindetails';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css']
})
export class AdminsigninComponent implements OnInit {

  login : Login = new Login();
  adminstatus: AdminStatus = new AdminStatus();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {}
  
  checkAdminLogin(){
    console.log("Hello");
    let data = new LoginDetails();
    data.email = this.login.email;
    data.password = this.login.password;
    this.http.post<any>('http://localhost:6969/adminlogin', data).subscribe(res=>{if(res.status == true){
  this.adminstatus.adminId = res.adminId;
  this.adminstatus.adminName = res.adminName;
  sessionStorage.setItem("adminName",this.adminstatus.adminName);
  sessionStorage.setItem("adminId", this.adminstatus.adminId);
  window.location.href = "http://localhost:4200/admin-login";

  }
});
}
}
export class Login{
  email :string;
  password : string;
  adminstatus : AdminStatus;
}

export class AdminStatus{
  status: boolean;
  statusMessage: string;
  adminName: string;
  adminId: string;
}
