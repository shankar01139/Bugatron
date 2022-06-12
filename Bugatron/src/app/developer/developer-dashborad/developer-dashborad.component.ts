import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-dashborad',
  templateUrl: './developer-dashborad.component.html',
  styleUrls: ['./developer-dashborad.component.css']
})
export class DeveloperDashboradComponent implements OnInit {

  constructor() { }
  currentUser:any;
  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem("currentuser");
  }

}
