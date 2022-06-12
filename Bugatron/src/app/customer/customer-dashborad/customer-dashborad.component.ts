import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashborad',
  templateUrl: './customer-dashborad.component.html',
  styleUrls: ['./customer-dashborad.component.css']
})
export class CustomerDashboradComponent implements OnInit {

  constructor() { }
  currentUser:any
  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem("currentuser");
  }

}
