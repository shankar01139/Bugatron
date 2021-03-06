import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IssueInfo } from 'src/app/shared/model/issue-info.model';
import { DeveloperInfoService } from 'src/app/shared/service/developer-info.service';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
declare var tinymce:any;
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
    assigned_to: 0,
    action: '',
  };
  devList:any =[];
  isResolved: boolean = false;
  myParam: any;
  constructor(
    private service: IssueInfoService,
    private devService:DeveloperInfoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    ($(document)as any).ready(() =>{
      
      tinymce.init({
        selector: '#IssueAction',
        inline: true,
        readonly: 1,
        skin: false,
        content_css: false,
      });
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.myParam = params['id'];
        this.getCustInfo();
        if (sessionStorage.getItem('isResolved') == 'true') {
          this.isResolved = true;
          this.service.get(this.myParam).subscribe((res) => {
            ($('#IssueAction') as any).html(res.action);
          });
        }
      }
    });
    this.devService.getAll().subscribe(res => {
      for(let i of res){
        this.devList.push(i);
      }
    })
  }
  saveCompany() {
    console.log(this.issue);
    const data = {
      issue_id: this.issue.issue_id,
      issue_name: this.issue.issue_name,
      issue_desc: this.issue.issue_desc,
      issue_status: this.issue.issue_status,
      project_id: this.issue.project_id,
      created: this.issue.created,
      updated: new Date(),
      assigned_to: this.issue.assigned_to,
      action: this.issue.action,
    };
    this.service.update(this.issue.issue_id, data).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/admin/issue');
    });
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
      this.issue.action = res.action;
      this.issue.assigned_to = res.assigned_to;
    });
  }
}
