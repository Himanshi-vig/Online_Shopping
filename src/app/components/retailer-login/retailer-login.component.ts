import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {

  retailerName:string;
  constructor() { }

  ngOnInit(): void {
    this.retailerName = sessionStorage.getItem("retailerName");
  }

}
