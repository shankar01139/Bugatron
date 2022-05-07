import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';

@Component({
  selector: 'app-issues-report',
  templateUrl: './issues-report.component.html',
  styleUrls: ['./issues-report.component.css'],
})
export class IssuesReportComponent implements OnInit {
  issueList: any = [];
  unassignedList: any = [];
  resolvedIssues:any=[];
  constructor(private issueService: IssueInfoService, private router: Router) {}

  ngOnInit(): void {
    this.getIssue();
    this.getUnassigned();
    this.getResolved();
  }
  getIssue() {
    this.issueService.getAll(sessionStorage.getItem("userId")).subscribe((res) => {
      debugger;
      console.log(res);
      for (let i of res) {
        if (i.issue_status != 'R') {
          this.issueList.push(i);
        }
      }
      setTimeout(() => {
        ($('#dtable') as any).dataTable();
      });
    });
  }
  getResolved() {
    this.issueService.getResolved(sessionStorage.getItem("userId")).subscribe((res) => {
      console.log(res);
      for (let i of res) {
          this.resolvedIssues.push(i);
      }
      setTimeout(() => {
        ($('#dtable2') as any).dataTable();
      });
    });
  }
  getUnassigned() {
    this.issueService.getUnassigned(sessionStorage.getItem("userId")).subscribe((res) => {
      console.log(res);
      for (let i of res) {
        if (i.issue_status != 'R') {
          this.unassignedList.push(i);
        }
      }
      setTimeout(() => {
        ($('#dtable1') as any).dataTable();
      });
    });
  } 
  editIssue(id: any) {
    sessionStorage.removeItem("isResolved");
    this.router.navigate(['/customer/addIssue', id]);
  }
  delIssue(id: any) {
    this.issueService.delete(id).subscribe((res) => {
      console.log(res);
    });
  }
  ViewIssue(id: any) {
    sessionStorage.setItem("isResolved","true");
    this.router.navigate(['/customer/addIssue', id]);
  }
}
