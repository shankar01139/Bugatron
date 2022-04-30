import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  isResolved: boolean = false;
  myParam: any;
  constructor(
    private issueService: IssueInfoService,
    private projService: ProjectInfoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    ($(document) as any).ready(() => {
      tinymce.baseURL = '/assets/tinymce';
      tinymce.init({
        selector: 'textarea#issueDescp',
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

      tinymce.init({
        selector: '#IssueAction',
        inline: true,
        readonly: 1,
        skin: false,
        content_css: false,
      });
    });
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.myParam = params['id'];
        this.getIssueInfo();
        if (sessionStorage.getItem('isResolved') == 'true') {
          this.isResolved = true;
          this.issueService.get(this.myParam).subscribe((res) => {
            ($('#IssueAction') as any).html(res.action);
          });
        }
      }
    });
  }

  ngOnInit(): void {
    tinymce.EditorManager.editors = [];
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
    this.issue.issue_desc = tinymce.get('issueDescp').getContent();
    this.issue.action = '...';
    this.issue.issue_status = 'O';
    const data = {
      issue_id: this.issue.issue_id,
      issue_name: this.issue.issue_name,
      issue_desc: this.issue.issue_desc,
      issue_status: this.issue.issue_status,
      assigned_to: this.issue.assigned_to.toString(),
      created: this.issue.created,
      project_id: this.issue.project_id.toString(),
      updated: this.issue.updated,
      action: this.issue.action,
    };
    console.log(data);
    if (this.issue.issue_id == 0) {
      this.issueService.create(data).subscribe((res) => {
        console.log(res);
        this.goBack();
      });
    } else {
      this.issueService.update(this.issue.issue_id, data).subscribe((res) => {
        this.goBack();
      });
    }
  }

  getIssueInfo() {
    this.issueService.get(this.myParam).subscribe((res) => {
      this.issue.issue_id = res.issue_id;
      this.issue.issue_name = res.issue_name;
      this.issue.issue_desc = res.issue_desc;
      this.issue.issue_status = res.issue_status;
      this.issue.project_id = res.project_id;
      this.issue.assigned_to = res.assigned_to;
      this.issue.action = res.action;
      this.issue.created = res.created;
      this.issue.updated = res.updated;
      ($('#issueDescp')as any).html(res.issue_desc);
    });
  }
}
