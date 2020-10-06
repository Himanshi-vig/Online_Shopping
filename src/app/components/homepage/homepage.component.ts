import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  custName: string ;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.custName = sessionStorage.getItem('customerName');
  }

  myFunction1() {
    alert("Please Login First to Compare");
}
}