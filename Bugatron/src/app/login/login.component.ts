import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInfo } from '../shared/model/customer-info.model';
import { CustomerInfoService } from '../shared/service/customer-info.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  cust: CustomerInfo = {
    customer_mail: '',
    customer_pass: '',
  };
  constructor(private customerService: CustomerInfoService,private router:Router) {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
  userLogin() {
    console.log(this.cust);
    sessionStorage.setItem('currentUser', this.cust.customer_mail.toString());
    if(this.cust.customer_mail == "bugAdmin@gmail.com" && this.cust.customer_pass == "bugatron@321"){
      sessionStorage.setItem("userType","Admin");
      this.router.navigateByUrl("admin/dashboard");
    }
    else if(this.cust.customer_mail == "cust@mail.com" && this.cust.customer_pass == "cust@321"){
      sessionStorage.setItem("userType","Customer");
      this.router.navigateByUrl('customer/dashboard');
    }
    else if(this.cust.customer_mail == "dev@mail.com" && this.cust.customer_pass == "dev@321"){
      sessionStorage.setItem("userType","Developer");
      this.router.navigateByUrl('developer/dashboard');
    }
    else{
      return;
    }
  }
}
