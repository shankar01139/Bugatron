import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from 'src/app/shared/service/company-info.service';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';
import Chart from 'chart.js/auto';
import { DatePipe } from '@angular/common';
//export var Chart:any;
@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css'],
})
export class AdminboardComponent implements OnInit {
  constructor(
    private issueService: IssueInfoService,
    private projectService: ProjectInfoService,
    private customerService: CustomerInfoService,
    private companyService: CompanyInfoService,
    private datepipe: DatePipe
  ) {
    this.getissues();
    console.log(this.issues?.Reopened);
    ($(document) as any).ready(() => {
      if (($('#issue-chart') as any).length) {
        var SalesChartCanvas = ($('#issue-chart') as any)
          .get(0)
          .getContext('2d');
        var SalesChart = new Chart(SalesChartCanvas, {
          type: 'bar',
          data: {
            labels: [
              this.datepipe.transform(
                this.today,
                'MMM d, YYYY',
                'en-US'
              ) as any,
            ],
            datasets: [
              {
                label: "Today's Issues",
                data: [this.issues?.open],
                backgroundColor: '#98BDFF',
              },
              {
                label: 'Reopened Issues',
                data: [this.issues?.Reopened],
                backgroundColor: '#4B49AC',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0,
              },
            },
          },
        });
      }
    });
  }
  count: any = {
    issues: 0,
    projects: 0,
    clients: 0,
    customers: 0,
  };
  today = new Date();
  issues: any = {
    open: 0,
    ReOpened: 0,
  };
  ngOnInit(): void {
    this.getCust();
    this.getCompany();
    this.getprojects();
  }
  getCust() {
    this.customerService.getAll().subscribe((res) => {
      console.log(res);
      this.count.customers = res.length;
    });
  }
  getCompany() {
    this.companyService.getAll().subscribe((res) => {
      console.log(res);
      this.count.clients = res.length;
    });
  }
  getprojects() {
    this.projectService.getAll().subscribe((res) => {
      console.log(res);
      this.count.projects = res.length;
    });
  }
  getissues() {
    this.issueService.getAllIssue().subscribe((res) => {
      console.log(res);
      for (let i of res) {
        if (i.created >= new Date() && i.issue_status != 'R') {
          this.count.issues++;
        }
        debugger;
        if (i.issue_status == 'O') {
          this.issues.open++;
        }
        if (i.issue_status == 'RE') {
          this.issues.Reopened++;
        }
      }
    });
  }
}
