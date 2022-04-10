import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInfo } from '../shared/model/customer-info.model';
import { CustomerInfoService } from '../shared/service/customer-info.service';
import { DeveloperInfoService } from '../shared/service/developer-info.service';
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
  constructor(
    private customerService: CustomerInfoService,
    private router: Router,
    private devService: DeveloperInfoService
  ) {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
    });
  }
  isCust: boolean ;
  isdev: boolean;

  ngOnInit(): void {}
  userLogin() {
    console.log(this.cust);
    this.customerService.login(this.cust.customer_mail,this.cust.customer_pass).subscribe(res =>{
      debugger;
      if(res  == null){
      this.isCust = false;
      }
      else{
        this.isCust = true;
      }
    })
    this.devService.login(this.cust.customer_mail,this.cust.customer_pass).subscribe(res =>{
      if(res  == null){
        this.isdev = false;
        }
        else{
          this.isdev = true;
        }
    })
    sessionStorage.setItem('currentUser', this.cust.customer_mail.toString());
    if (
      this.cust.customer_mail == 'bugAdmin@gmail.com' &&
      this.cust.customer_pass == 'bugatron@321'
    ) {
      sessionStorage.setItem('userType', 'Admin');
      this.router.navigateByUrl('admin/dashboard');
    } else if (this.isCust) {
      sessionStorage.setItem('userType', 'Customer');
      this.router.navigateByUrl('customer/dashboard');
    } else if (this.isdev) {
      sessionStorage.setItem('userType', 'Developer');
      this.router.navigateByUrl('developer/dashboard');
    } else {
      return;
    }
  }
}
