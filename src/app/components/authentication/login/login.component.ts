import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingserviceService } from '../../../shoppingservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = new Login();
  data :any;
  message: string;

  constructor(private shoppingService: ShoppingserviceService, private router: Router) { }

  checkLogin() {
    this.shoppingService.login(this.login).subscribe(data => { console.log(data);
      if(data.status == true) {
        sessionStorage.setItem('customerId', String(data.customerId));
        sessionStorage.setItem('customerName',String(data.name));
        this.router.navigate(['dashboard']);
      }
      else{
        this.message = data.statusMessage;
      }
    })
  }
  }
export class Login {
  email: string;
  password: string;
}

export class LoginStatus{
  status: boolean;
  statusMessage: string;
  name: string;
  customerId: number;
}
