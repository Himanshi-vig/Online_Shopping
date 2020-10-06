import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  custName: string ;
  custId : string;


  constructor(private http : HttpClient) {}
    
   ngOnInit(): void {
    this.custName = sessionStorage.getItem('customerName');
    this.custId = sessionStorage.getItem('customerId');
  }

}
