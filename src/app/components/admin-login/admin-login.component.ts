import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminName:string;

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.adminName = sessionStorage.getItem("adminName");
  }

}
