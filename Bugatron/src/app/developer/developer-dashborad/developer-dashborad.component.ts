import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CompanyInfoService } from 'src/app/shared/service/company-info.service';
import { CustomerInfoService } from 'src/app/shared/service/customer-info.service';
import { IssueInfoService } from 'src/app/shared/service/issue-info.service';
import { ProjectInfoService } from 'src/app/shared/service/project-info.service';

@Component({
  selector: 'app-developer-dashborad',
  templateUrl: './developer-dashborad.component.html',
  styleUrls: ['./developer-dashborad.component.css']
})
export class DeveloperDashboradComponent implements OnInit {
  issueCount: any = [];
  issueList:any = [];
  constructor(
    private issueService: IssueInfoService,
    private projectService: ProjectInfoService,
    private customerService: CustomerInfoService,
    private companyService: CompanyInfoService,
    private datepipe: DatePipe
  ) {
    ($(document) as any).ready(() => {
      this.issueService.getAssignedforMe(sessionStorage.getItem('userId')).subscribe((res) => {
        console.log(res);
        for (let i of res) {
          this.issueList.push(i);
          if (i.issue_status != 'R') {
            this.count.issues += 1;
          }
          if (i.issue_status == 'O') {
            this.issues.open += 1;
          }
          if (i.issue_status == 'RE') {
            this.issues.ReOpened += 1;
          }
          if (i.issue_status == 'C') {
            this.issues.Closed += 1;
          }
          if (i.issue_status == 'R') {
            this.issues.Resolved += 1;
          }
        }
        console.log(this.issues);
        var SalesChartCanvas = ($('#salesBarchart') as any).get(0).getContext('2d'); //issue char bar
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
                label: "New Issues",
                data: [this.issues?.open],
                backgroundColor: '#98BDFF',
              },
              {
                label: 'Reopened Issues',
                data: [this.issues?.ReOpened],
                backgroundColor: '#4B49AC',
              },
              {
                label: 'Closed Issues',
                data: [this.issues?.Closed],
                backgroundColor: '#F3797E',
              },
              {
                label: 'Resolved Issues',
                data: [this.issues?.Resolved],
                backgroundColor: '#6c757d',
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
        }); // end issue chart
      });
      this.issueService
        .getDevIssueCount(
          this.datepipe.transform(
            new Date().setDate(this.today.getDate() - 4),
            'yyyy-MM-dd'
          ) as any,sessionStorage.getItem('userId')
        )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
        .getDevIssueCount(
          this.datepipe.transform(
            new Date().setDate(this.today.getDate() - 3),
            'yyyy-MM-dd'
          ) as any,sessionStorage.getItem('userId')
        )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
        .getDevIssueCount(
          this.datepipe.transform(
            new Date().setDate(this.today.getDate() - 2),
            'yyyy-MM-dd'
          ) as any,sessionStorage.getItem('userId')
        )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
        .getDevIssueCount(
          this.datepipe.transform(
            new Date().setDate(this.today.getDate() - 1),
            'yyyy-MM-dd'
          ) as any,sessionStorage.getItem('userId')
        )
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      this.issueService
        .getDevIssueCount(this.datepipe.transform(this.today, 'yyyy-MM-dd') as any,sessionStorage.getItem('userId'))
        .subscribe((res) => {
          console.log(res);
          this.issueCount.push(res);
        });
      var areaData = {};
      var revenueChartCanvas = ($('#order-chart') as any)
        .get(0)
        .getContext('2d');
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: {
          labels: [
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 4),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 3),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 2),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(
              new Date().setDate(this.today.getDate() - 1),
              'MMM d',
              'en-US'
            ) as any,
            this.datepipe.transform(this.today, 'MMM d', 'en-US') as any,
          ],
          datasets: [
            {
              data: this.issueCount,
              borderColor: '#4747A1',
              borderWidth: 2,
              fill: false,
              label: 'Issues',
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
    Resolved: 0,
    Closed: 0,
  };  currentUser:any;
  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem("currentuser");
  }
}
