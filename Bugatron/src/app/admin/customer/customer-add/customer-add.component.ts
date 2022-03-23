import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerInfo } from 'src/app/shared/model/customer-info.model';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css'],
})
export class CustomerAddComponent implements OnInit {
  cust: CustomerInfo = {
    customer_id: 0,
    customer_name: '',
    company_name: '',
    customer_mail: '',
    customer_pass: '',
    customer_contact: '',
    customer_stat: '',
    created: new Date(),
  };
  myParam:any;
  constructor(private service: CustomerInfoService, private router: Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      if(params['id']){
        this.myParam = params['id'];
        this.getCustInfo();
      }
    })
  }
  saveCustomer() {
    console.log(this.cust);
    const data = {
      customer_id: this.cust.customer_id,
      customer_name: this.cust.company_name,
      company_name: this.cust.company_name,
      customer_mail: this.cust.customer_mail,
      customer_pass: this.cust.customer_pass,
      customer_contact: this.cust.customer_contact,
      customer_stat: 'Y',
      created: this.cust.created,
    };
    if (data.customer_id == 0) {
      this.service.create(data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/customer');
      });
    } else {
      this.service.update(this.cust.customer_id, data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/customer');
      });
    }
  }

  goBack() {
    this.router.navigateByUrl('/admin/customer');
  }
  getCustInfo(){
    this.service.get(this.myParam).subscribe(res =>{
      this.cust.customer_id = res.customer_id;
      this.cust.company_name = res.company_name;
      this.cust.customer_name = res.customer_name;
      this.cust.customer_pass = res.customer_pass;
      this.cust.customer_contact = res.customer_contact;
      this.cust.customer_mail = res.customer_mail;
      this.cust.customer_stat = res.customer_stat;
      this.cust.created = res.created;
    })
  }
}
