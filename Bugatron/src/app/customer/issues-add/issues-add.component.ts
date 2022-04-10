import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueInfo } from 'src/app/shared/model/issue-info.model';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';
declare var tinymce: any;
@Component({
  selector: 'app-issues-add',
  templateUrl: './issues-add.component.html',
  styleUrls: ['./issues-add.component.css'],
})
export class IssuesAddComponent implements OnInit {
  issue: IssueInfo = {
    issue_id: 0,
    issue_name: '',
    issue_desc: '',
    issue_status: '',
    project_id: 0,
    assigned_to: 0,
    created: new Date(),
    updated: new Date(),
    action: '',
  };
  projList: any = [];
  constructor(
    private issueService: IssueInfoService,
    private projService: ProjectInfoService,
    private router: Router
  ) {
    ($(document) as any).ready(() => {
      tinymce.baseURL = '/assets/tinymce';
      tinymce.init({
        selector: 'textarea',
        theme: 'silver',
        plugins: [
          'advlist',
          'autolink',
          'link',
          'image',
          'lists',
          'charmap',
          'preview',
          'pagebreak',
          'searchreplace',
          'wordcount',
          'visualblocks',
          'visualchars',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'nonbreaking',
          'save',
          'table',
          'directionality',
          'emoticons',
          'template',
        ],
        toolbar:
          'insertfile undo redo | fontsizeselect | fontselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
        skin: false,
        content_css: false,
      });
    });
  }

  ngOnInit(): void {
    tinymce.remove();
    this.projService.getAll().subscribe((res) => {
      for (let i of res) {
        this.projList.push(i);
      }
      console.log(this.projList);
    });
  }
  goBack() {
    this.router.navigateByUrl('/customer/dashboard');
  }
  saveIssue() {
    const data = {
      issue_id: this.issue.issue_id,
      issue_name: this.issue.issue_name,
      issue_desc: this.issue.issue_desc,
      issue_status: this.issue.issue_status,
      assigned_to: this.issue.assigned_to,
      created: this.issue.created,
      project_id: this.issue.project_id,
      updated: this.issue.updated,
      action:this.issue.action
    };
    this.issueService.create(data).subscribe((res) => {
      console.log(res);
    });
  }
}
