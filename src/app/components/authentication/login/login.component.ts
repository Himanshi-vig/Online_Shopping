import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingserviceService } from '../../../shoppingservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  data: any;
  message: string;

  constructor(private shoppingService: ShoppingserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  checkLogin() {
    // this.shoppingService.login(this.login).subscribe(response => alert(JSON.stringify(response)));
    this.shoppingService.login(this.login).subscribe(data => { console.log(data);
  // tslint:disable-next-line: align
  if (data.status == true) {
        sessionStorage.setItem('customerId', String(data.));
        sessionStorage.setItem('customerName', data.name);
        this.router.navigate(['homepage']);
      }
      else {
        this.message = data.statusMessage;
      }
    });
  }

  }


export class Login {
  email: string;
  password: string;
  loginStatus: LoginStatus;
}

export class LoginStatus{
  status: boolean;
  statusMessage: string;
  name: string;
  customerId: number;
}
