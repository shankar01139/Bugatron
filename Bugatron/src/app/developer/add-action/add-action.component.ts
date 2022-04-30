import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IssueInfo } from 'src/app/shared/model/issue-info.model';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
declare var tinymce: any;
@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css'],
})
export class AddActionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private issueService: IssueInfoService,
    private router: Router
  ) {
    ($(document) as any).ready(() => {
      tinymce.baseURL = '/assets/tinymce';
      tinymce.init({
        selector: 'textarea#issueAction',
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
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.myParam = params['id'];
        this.getIssueInfo();
      }
    });
  }
  myParam: any;
  issueStatus: any;
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
  ngOnInit(): void {
    tinymce.EditorManager.editors = [];
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
      ($('#issueAction') as any).html(res.action);
    });
  }
  goBack() {
    this.router.navigateByUrl('/developer/tasks');
  }
  saveAction() {
    this.issue.action = tinymce.get('issueAction').getContent();
    const data = {
      issue_id: this.issue.issue_id,
      issue_statue: sessionStorage.getItem("selectedStatus"),
      action: this.issue.action,
      updated:new Date()
    };
    this.issueService.updateAction(this.myParam, data).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/developer/tasks');
    });
  }
}
