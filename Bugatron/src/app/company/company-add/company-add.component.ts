import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyInfo } from 'src/app/shared/model/company-info.model';
import { CompanyInfoService } from 'src/app/shared/service/company-info.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css'],
})
export class CompanyAddComponent implements OnInit {
  cust: CompanyInfo = {
    company_id: 0,
    comapny_name: '',
    company_address: '',
    company_stat: '',
    city: '',
    state: '',
    country: '',
    created: new Date(),
    zip: '',
  };
  myParam: any;
  rec_stat:boolean;
  constructor(
    private service: CompanyInfoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.myParam = params['id'];
        this.getCustInfo();
      }
    });
  }
  saveCompany() {
    debugger
    if(this.rec_stat == true){
      this.cust.company_stat = 'Y';
    }
    else{
      this.cust.company_stat = 'N';
    }
    console.log(this.cust);
    const data = {
      company_id: this.cust.company_id,
      comapny_name: this.cust.comapny_name,
      company_address: this.cust.company_address,
      company_stat: this.cust.company_stat,
      city: this.cust.city,
      state: this.cust.state,
      country: this.cust.country,
      created: this.cust.created,
      zip: this.cust.zip,
    };
    if (data.company_id == 0) {
      this.service.create(data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/company');
      });
    } else {
      this.service.update(this.cust.company_id, data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/company');
      });
    }
  }

  goBack() {
    this.router.navigateByUrl('/admin/company');
  }
  getCustInfo() {
    this.service.get(this.myParam).subscribe((res) => {
      this.cust.company_id= res.company_id;
      this.cust.comapny_name = res.comapny_name;
      this.cust.company_address=res.company_address;
      if(res.company_stat== 'Y'){
        this.rec_stat = true;
      }
      else{
        this.rec_stat = false;
      }
      this.cust.city = res.city;
      this.cust.state = res.state;
      this.cust.country = res.country;
      this.cust.created = res.created;
      this.cust.zip = res.zip;
    });
  }
}
