import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IssueInfo } from 'src/app/shared/model/issue-info.model';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.css'],
})
export class IssueAddComponent implements OnInit {
  issue: IssueInfo = {
    issue_id: 0,
    issue_name: '',
    issue_desc: '',
    issue_status: '',
    project_id: 0,
    created: new Date(),
    updated: new Date(),
  };
  myParam: any;
  constructor(
    private service: IssueInfoService,
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
    console.log(this.issue);
    const data = {
      issue_id: this.issue.issue_id,
      issue_name: this.issue.issue_name,
      issue_desc: this.issue.issue_desc,
      issue_status: this.issue.issue_status,
      project_id: this.issue.project_id,
      created: new Date(),
      updated: new Date(),
    };
    if (data.issue_id == 0) {
      this.service.create(data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/issue');
      });
    } else {
      this.service.update(this.issue.issue_id, data).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin/issue');
      });
    }
  }

  goBack() {
    this.router.navigateByUrl('/admin/issue');
  }
  getCustInfo() {
    this.service.get(this.myParam).subscribe((res) => {
      this.issue.issue_id = res.issue_id;
      this.issue.issue_name = res.issue_name;
      this.issue.issue_desc = res.issue_desc;
      this.issue.issue_status = res.issue_status;
      this.issue.project_id = res.project_id;
      this.issue.created = res.created;
      this.issue.updated = res.updated;
    });
  }
}
