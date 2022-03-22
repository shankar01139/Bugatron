import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList :any = [];
  constructor(private customerService:CustomerInfoService,private router:Router) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
      this.customerList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    });
  }
  custAdd(){
    this.router.navigateByUrl('/admin/customer/add');
  }
}
