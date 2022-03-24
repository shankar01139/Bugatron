import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectInfo } from 'src/app/shared/model/project-info.model';
import { CompanyInfoService } from 'src/app/shared/service/company-info.service';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css'],
})
export class ProjectAddComponent implements OnInit {
  proj: ProjectInfo = {
    project_id: 0,
    project_name: '',
    project_company: '',
    created: new Date(),
    customer_id: 0,
  };
  custList: any = [];
  compList:any =[];
  myParam: any;
  constructor(
    private customerService: CustomerInfoService,
    private router: Router,
    private projectService: ProjectInfoService,
    private route: ActivatedRoute,
    private companyService:CompanyInfoService
  ) {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
      for (let i of res) {
        this.custList.push(i);
      }
    });
    this.companyService.getAll().subscribe(res=>{
      for(let i of res){
        this.compList.push(i);
      }
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.myParam = params['id'];
        this.getProjInfo();
      }
    });
  }
  saveProj() {
    debugger;
    const data = {
      project_id: this.proj.project_id,
      project_name: this.proj.project_name,
      project_company: this.proj.project_company,
      created: this.proj.created,
      customer_id: this.proj.customer_id,
    };
    if (data.project_id == 0) {
      this.projectService.create(data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/project');
      });
    } else {
      this.projectService
        .update(this.proj.project_id, data)
        .subscribe((res) => {
          console.log(res);
          this.router.navigateByUrl('/admin/project');
        });
    }
  }
  goBack() {
    this.router.navigateByUrl('/admin/project');
  }
  getProjInfo() {
    this.projectService.get(this.myParam).subscribe((res) => {
      this.proj.project_id = res.project_id;
      this.proj.customer_id = res.customer_id;
      this.proj.project_company = res.project_company;
      this.proj.project_name = res.project_name;
      this.proj.created = res.created;
    });
  }
  
}
