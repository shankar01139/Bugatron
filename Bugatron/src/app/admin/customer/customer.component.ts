import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList :any = [];
  constructor(private customerService:CustomerInfoService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
      this.customerList = res;
      setTimeout(()=>{
        ($("#dtable")as any).dataTable();
      })
    });
  }

}
