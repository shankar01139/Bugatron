import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyInfo } from 'src/app/shared/model/company-info.model';
import { DeveloperInfo } from 'src/app/shared/model/developer-info.model';
import { DeveloperInfoService } from 'src/app/shared/service/developer-info.service';

@Component({
  selector: 'app-developer-add',
  templateUrl: './developer-add.component.html',
  styleUrls: ['./developer-add.component.css'],
})
export class DeveloperAddComponent implements OnInit {
  dev: DeveloperInfo = {
    developer_id: 0,
    developer_name: '',
    developer_pos: '',
    developer_email: '',
    developer_password: '',
    developer_contact: '',
    created: new Date(),
  };
  myParam: any;
  constructor(
    private service: DeveloperInfoService,
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
  saveDev() {
    console.log(this.dev);
    const data = {
      developer_id: this.dev.developer_id,
      developer_name: this.dev.developer_name,
      developer_pos: this.dev.developer_pos,
      developer_email: this.dev.developer_email,
      developer_password: this.dev.developer_password,
      developer_contact: this.dev.developer_contact,
      created: this.dev.created,
    };
    if (data.developer_id == 0) {
      this.service.create(data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/developer');
      });
    } else {
      this.service.update(this.dev.developer_id, data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/developer');
      });
    }
  }

  goBack() {
    this.router.navigateByUrl('/admin/developer');
  }
  getCustInfo() {
    debugger;
    this.service.get(this.myParam).subscribe((res) => {
      console.log(res.developer_contact)
      this.dev.developer_id = res.developer_id;
      this.dev.developer_name = res.developer_name;
      this.dev.developer_pos = res.developer_pos;
      this.dev.developer_email = res.developer_email;
      this.dev.developer_password = res.developer_password;
      this.dev.developer_contact = res.developer_contact;
      this.dev.created = res.created;
    });
  }
}
